import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';

class Layout extends Component {
	render() {
		const { component: ThisComponent } = this.props;
		return (
			<div id="wrapper">
				<div id="page-wrapper" className="gray-bg">
                    <Header />
                    
					<div className="wrapper wrapper-content">
						<div className="container">
							<ThisComponent />
						</div>
					</div>

					<Footer />
				</div>
			</div>
		);
	}
}

export default Layout;
