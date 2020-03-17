import React from 'react';
import { Provider } from 'react-redux';
import configStore from './redux/configStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import GlobalLoading from './components/GlobalLoading';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import FELayout from './components/Frontend/Layout';

const store = configStore();

class App extends React.Component {
	renderFrontendRoutes() {
		let xhtml = null;
		xhtml = ROUTES.map(route => {
			let { path, exact, alias, aliasName } = route;
			let newPath = alias ? `${path}/:${aliasName}` : path;
			return (
				<Route key={path} path={newPath} exact={exact}>
					<FELayout component={route.component} />
				</Route>
			);
		});
		return xhtml;
	}

	render() {
		return (
			<Provider store={store}>
				<Router>
					<ToastContainer />
					{/* <GlobalLoading /> */}
					<Switch>{this.renderFrontendRoutes()}</Switch>
				</Router>
			</Provider>
		);
	}
}

export default App;
