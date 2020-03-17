import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../../redux/actions/user';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	componentDidUpdate() {

		let { token, history } = this.props;

		if (token && history) {
			history.push('/');
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
		const { loginAction } = this.props.userActionCreators;
		let { email, password } = this.state;
		loginAction({ email, password });
	};

	render() {
		let { email, password } = this.state;
		return (
			<div className="row">
				<div className="col-md-8 col-md-offset-2">
					<div className="panel panel-default">
						<div className="panel-heading">Login</div>
						<div className="panel-body">
							<form className="form-horizontal" onSubmit={this.handleSubmit}>
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
								{/* <div className="form-group">
									<div className="col-md-6 col-md-offset-4">
										<div className="checkbox">
											<label>
												<input type="checkbox" name="remember" /> Remember Me
											</label>
										</div>
									</div>
								</div> */}
								<div className="form-group">
									<div className="col-md-8 col-md-offset-4">
										<button type="submit" className="btn btn-primary">
											Login
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

LoginPage.propTypes = {
	token: PropTypes.string,
	userActionCreators: PropTypes.shape({
		loginAction: PropTypes.func
	})
}

const mapStateToProps = state => {
	return {
		token: state.user.token,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		userActionCreators: bindActionCreators(userActions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));
