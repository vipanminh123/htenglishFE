import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as userActions from '../../../redux/actions/user';
import { withRouter } from 'react-router';

class RegisterPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			cf_password: '',
		};
	}

	componentDidUpdate(preProps) {
		let { registered, history } = this.props;

		if (preProps.registered !== registered && history) {
			history.push('/login');
		}
	}

	onChangeInput = e => {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value,
		});
	};

	onSubmit = e => {
		e.preventDefault();
		const { registerUser } = this.props.userActionCreators;
		let userInfo = null;
		let { name, email, password, cf_password } = this.state;
		if (password === cf_password) {
			userInfo = {
				name,
				email,
				password,
			};
			registerUser(userInfo);
		}
	};

	render() {
		let { name, email, password, cf_password } = this.state;

		return (
			<div className="row">
				<div className="col-md-8 col-md-offset-2">
					<div className="panel panel-default">
						<div className="panel-heading">Register</div>
						<div className="panel-body">
							<form className="form-horizontal" onSubmit={this.onSubmit}>
								<div className="form-group">
									<label className="col-md-4 control-label">Name</label>
									<div className="col-md-6">
										<input
											type="text"
											name="name"
											value={name}
											required="required"
											className="form-control"
											onChange={this.onChangeInput}
										/>
									</div>
								</div>
								<div className="form-group">
									<label className="col-md-4 control-label">E-Mail Address</label>
									<div className="col-md-6">
										<input
											type="email"
											name="email"
											value={email}
											required="required"
											className="form-control"
											onChange={this.onChangeInput}
										/>
									</div>
								</div>
								<div className="form-group">
									<label className="col-md-4 control-label">Password</label>
									<div className="col-md-6">
										<input
											type="password"
											name="password"
											value={password}
											required="required"
											className="form-control"
											onChange={this.onChangeInput}
										/>
									</div>
								</div>
								<div className="form-group">
									<label className="col-md-4 control-label">Confirm Password</label>
									<div className="col-md-6">
										<input
											type="password"
											name="cf_password"
											value={cf_password}
											required="required"
											className="form-control"
											onChange={this.onChangeInput}
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-md-6 col-md-offset-4">
										<button type="submit" className="btn btn-primary">
											Register
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

RegisterPage.propTypes = {
	user: PropTypes.object,
	userActionCreators: PropTypes.shape({
		registerUser: PropTypes.func,
	}),
};

const mapStateToProps = state => {
	return {
		user: state.user.userInfo,
		registered: state.user.registered,
	};
};

const mapDisPatchToProps = dispatch => {
	return {
		userActionCreators: bindActionCreators(userActions, dispatch),
	};
};

export default connect(mapStateToProps, mapDisPatchToProps)(withRouter(RegisterPage));
