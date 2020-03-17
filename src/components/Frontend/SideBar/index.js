import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
	render() {
		return (
			<div className="col-md-3 ht-sidebar">
				<div className="ibox-content">
					<h3>Phrases</h3>
					<ul className="folder-list sidebar-list" style={{padding: 0}}>
						<li className="">
							<Link to="/phrases">
								<i className="fa fa-hand-o-right"></i> All Phrases
							</Link>
						</li>
						<li className="">
							<Link to="/phrases/storage">
								<i className="fa fa-hand-o-right"></i> Phrases Storage
							</Link>
						</li>
						<li className="">
							<span>
								<i className="fa fa-hand-o-right"></i> Learn Phrases
							</span>
							<ul>
								<li className="">
									<Link to="/phrases/learn/engtoviet">
										<i className="fa fa-hand-o-right"></i> Englist to Vietnamese
									</Link>
								</li>
								<li className="">
									<Link to="/phrases/learn/viettoeng">
										<i className="fa fa-hand-o-right"></i> Vietnamese to English
									</Link>
								</li>
							</ul>
						</li>
					</ul>
					<div className="hr-line-dashed"></div>
					<h3>Words</h3>
					<ul className="folder-list sidebar-list" style={{padding: 0}}>
						<li className="">
							<Link to="/words">
								<i className="fa fa-hand-o-right"></i> All words
							</Link>
						</li>
						<li className="">
							<Link to="/words/storage">
								<i className="fa fa-hand-o-right"></i> Words storage
							</Link>
						</li>
						<li className="">
							<span>
								<i className="fa fa-hand-o-right"></i> Learn Word
							</span>
							<ul>
								<li className="">
									<Link to="/words/learn/engtoviet">
										<i className="fa fa-hand-o-right"></i> Englist to Vietnamese
									</Link>
								</li>
								<li className="">
									<Link to="/words/learn/viettoeng">
										<i className="fa fa-hand-o-right"></i> Vietnamese to English
									</Link>
								</li>
							</ul>
						</li>
					</ul>
					<div className="hr-line-dashed"></div>
					<h3>Lesson</h3>
					<ul className="folder-list sidebar-list" style={{padding: 0}}>
						<li className="">
							<Link to="/lessons">
								<i className="fa fa-hand-o-right"></i> All Lessons
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default SideBar;
