import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../../redux/actions/user';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class Header extends Component {
	renderRightNavbar = () => {
		const { token } = this.props;
		let xhtml = null;
		if (!token) {
			xhtml = (
				<ul className="nav navbar-nav navbar-right">
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/register">Register</Link>
					</li>
				</ul>
			);
		} else {
			xhtml = (
				<ul className="nav navbar-nav navbar-right">
					<li className="dropdown">
						<a
							aria-expanded="true"
							role="button"
							href="#"
							className="dropdown-toggle"
							data-toggle="dropdown"
						>
							admin <span className="caret"></span>
						</a>
						<ul role="menu" className="dropdown-menu">
							<li>
								<Link to="/profile">
									<i className="fa fa-sign-out"></i> Profile
								</Link>
							</li>
							<li>
								<Link to="/logout" onClick={this.handleLogout}>
									<i className="fa fa-sign-out"></i> Logout
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			);
		}
		return xhtml;
	};

	handleLogout = e => {
		e.preventDefault();
		const { logoutAction } = this.props.userActionCreators;
		let { history } = this.props;
		logoutAction();
		if (history) {
			history.push('/login');
		}
	};

	render() {
		return (
			<div className="row border-bottom white-bg">
				<nav className="navbar navbar-static-top" role="navigation">
					<div className="navbar-header">
						<button
							aria-controls="navbar"
							aria-expanded="false"
							data-target="#navbar"
							data-toggle="collapse"
							className="navbar-toggle collapsed"
							type="button"
						>
							<i className="fa fa-reorder"></i>
						</button>
						<Link to="/" className="navbar-brand">
							HT Learn English
						</Link>
					</div>
					<div className="navbar-collapse collapse" id="navbar">
						<ul className="nav navbar-nav">
							<li>
								<Link to="/lessons">100 English Lessons</Link>
							</li>
							<li>
								<Link to="/phrases">1000 Most Common English Phrases</Link>
							</li>
							<li>
								<Link to="/words">1000 Most Common English Words</Link>
							</li>
							<li>
								<Link to="/guide">Guide</Link>
							</li>
						</ul>

						{this.renderRightNavbar()}
					</div>
				</nav>
			</div>
		);
	}
}

Header.propTypes = {
	token: PropTypes.string,
};

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
