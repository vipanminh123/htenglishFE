import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../../redux/actions/user';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class ProfilePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			confirm_password: '',
		};
    }
    
    componentDidMount() {
        let { token, userInfo, history, userActionCreators } = this.props;
        let { getUserInfo } = userActionCreators;
        if (token) {
            if (userInfo) {
                const { name, email } = userInfo;
                this.setState({
                    name,
                    email
                })
            }
            else {
                getUserInfo(token);
            }
        }
        else {
            if (history) {
                history.push('/login');
            }
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        let { userInfo } = this.props;
        if ( prevProps.userInfo !== userInfo && userInfo ){
            const { name, email } = userInfo;
            this.setState({
                name,
                email
            })
        }        
    }

	onChangeInput = e => {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = e => {
        e.preventDefault();
        const { name, password, confirm_password } = this.state;
        const { name: userName, email } = this.props.userInfo;
        const { updateProfile } = this.props.userActionCreators;

        if ( (password === confirm_password && password !== '') || (name !== userName) ) {
            updateProfile({
                name,
                email,
                new_password: password
            })
        }
	};

	render() {
		let { name, email, password, confirm_password } = this.state;
		return (
			<div className="row">
				<div className="col-sm-10 col-sm-offset-1">
					<div className="ibox float-e-margins">
						<div className="ibox-title">
							<h1 className="text-center">Profile</h1>
						</div>
						<div className="ibox-content">
							<form className="form-horizontal" onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label className="col-sm-2 control-label">Name:</label>
									<div className="col-sm-10">
										<input
											type="text"
											name="name"
											value={name}
											className="form-control"
											required
											onChange={this.onChangeInput}
										/>
									</div>
								</div>
								<div className="hr-line-dashed"></div>

								<div className="form-group">
									<label className="col-sm-2 control-label">Email Address:</label>
									<div className="col-sm-10">
										<input
											name="email"
											type="text"
											value={email}
											className="form-control"
											readOnly
											onChange={this.onChangeInput}
										/>
									</div>
								</div>
								<div className="hr-line-dashed"></div>

								<div className="form-group">
									<label className="col-sm-2 control-label">New Password:</label>
									<div className="col-sm-10">
										<input
											type="password"
											name="password"
											value={password}
											className="form-control"
											onChange={this.onChangeInput}
										/>
									</div>
								</div>
								<div className="hr-line-dashed"></div>

								<div className="form-group">
									<label className="col-sm-2 control-label">Confirm Password:</label>
									<div className="col-sm-10">
										<input
											type="password"
											name="confirm_password"
											value={confirm_password}
											className="form-control"
											onChange={this.onChangeInput}
										/>
									</div>
								</div>
								<div className="hr-line-dashed"></div>

								<div className="form-group">
									<div className="col-sm-4 col-sm-offset-2">
										<button className="btn btn-primary dim" type="submit">
											Update
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ProfilePage.propTypes = {
    userInfo: PropTypes.object,
    token: PropTypes.string
};

const mapStateToProps = state => {
	return {
		userInfo: state.user.userInfo,
		token: state.user.token,
	};
};

const mapDispatchToProps = dispatch => {
    return {
        userActionCreators: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePage));
