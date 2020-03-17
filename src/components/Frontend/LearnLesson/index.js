import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lessonActions from '../../../redux/actions/lesson';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { API_ENDPOINT } from '../../../constants';
import SideBar from '../SideBar';

class LearnLesson extends Component {
	componentDidMount() {
		const lessonAlias = this.props.match.params.lessonAlias;
		const { token, history, lessonActionCreators } = this.props;
		const { fetchLessonDetail } = lessonActionCreators;
		if (token) {
			fetchLessonDetail(lessonAlias);
		} else {
			history.push('/login');
		}
	}

	render() {
		const { lessonDetail } = this.props;

		let tap1Extend =
			lessonDetail && lessonDetail.alias === 'introducing-a-friend' ? (
				<div className="form-group">
					<label className="col-sm-2 control-label">Michael</label>
					<div className="col-sm-8">
						<input type="text" className="form-control input-content" />
						<input type="hidden" className="input-result" value="Robert, this is my friend, Mrs. Smith" />
					</div>
					<div className="col-sm-2">
						<strong className="hidden hide-check-true">TRUE</strong>
						<strong className="hidden hide-check-false">FALSE</strong>
					</div>
					<label className="col-sm-10 col-sm-offset-2 hide-result hidden">
						Result: <span>Robert, this is my friend, Mrs. Smith</span>
					</label>
				</div>
			) : (
				''
			);

		let tap1Content =
			lessonDetail &&
			lessonDetail.english.map((item, index) => {
				return (
					<div key={index} className="form-group">
						<label className="col-sm-2 control-label">
							{index % 2 === 0 ? lessonDetail.character1 : lessonDetail.character2}
						</label>
						<div className="col-sm-8">
							<input type="text" className="form-control input-content" />
							<input type="hidden" className="input-result" value={item} />
						</div>
						<div className="col-sm-2">
							<strong className="hidden hide-check-true">TRUE</strong>
							<strong className="hidden hide-check-false">FALSE</strong>
						</div>
						<label className="col-sm-10 col-sm-offset-2 hide-result hidden">
							Result: <span>{item}</span>
						</label>
					</div>
				);
			});

		let tap2Extend =
			lessonDetail && lessonDetail.alias === 'introducing-a-friend' ? (
				<div className="form-group">
					<label className="col-sm-2 control-label">Michael</label>
					<div className="col-sm-10">
						<p className="lesson-english-content" style={{ color: '#000' }}>
							Robert, this is my friend, Mrs. Smith
						</p>
						<div className="lesson-vietnamese-content" style={{color: "blue"}}>
							Robert, đây là bạn tôi, bà Smith
						</div>
					</div>
				</div>
			) : (
				''
			);

		let tap2Content =
			lessonDetail &&
			lessonDetail.english.map((item, index) => {
				return (
					<div key={index} className="form-group">
						<label className="col-sm-2 control-label">
							{item % 2 === 0 ? lessonDetail.character1 : lessonDetail.character2}
						</label>
						<div className="col-sm-10">
							<p className="lesson-english-content" style={{ color: '#000' }}>
								{item}
							</p>
							<div className="lesson-vietnamese-content" style={{ color: 'blue' }}>
								{lessonDetail.vietnamese[index]}
							</div>
						</div>
					</div>
				);
			});

		return (
			<div className="row show-sidebar">
				<div className="col-sm-9">
					<div className="ibox float-e-margins">
						<div className="ibox-title">
							<h1 className="text-center">
								Lesson {lessonDetail ? lessonDetail.order : ''}: {lessonDetail ? lessonDetail.title : ''}
							</h1>
						</div>
						<div className="ibox-content form-horizontal">
							<div className="form-group">
								<label className="col-sm-2">Listen: </label>
								<div className="col-sm-10">
									{lessonDetail ? (
										<AudioPlayer src={`${API_ENDPOINT}public/${lessonDetail.audio}`} />
									) : ''}
								</div>
							</div>
							<div className="hr-line-dashed"></div>
							<div className="tabs-container">
								<ul className="nav nav-tabs">
									<li className="active">
										<a data-toggle="tab" href="#tab-1" aria-expanded="false">
											{' '}
											Write
										</a>
									</li>
									<li className="">
										<a
											href="#tab-2"
											className="open-tab-click"
											aria-expanded="true"
											style={{ cursor: 'not-allowed' }}
										>
											View Content
										</a>
									</li>
								</ul>
								<div className="tab-content">
									<div id="tab-1" className="tab-pane active">
										<div className="panel-body">
											{tap1Extend}
											{tap1Extend ? <div className="hr-line-dashed"></div> : ''}
											{tap1Content}
											{tap1Content ? <div className="hr-line-dashed"></div> : ''}
											<div className="form-group">
												<div className="col-sm-5 col-sm-offset-2">
													<button
														className="btn btn-success dim"
														type="button"
														id="button-check-result"
													>
														Check
													</button>
													<button
														className="btn btn-primary dim hidden"
														type="button"
														id="button-show-result"
													>
														Show Result
													</button>
													<label className="m-l" id="show-result-total"></label>
												</div>
											</div>
										</div>
									</div>
									<div id="tab-2" className="tab-pane">
										<div className="panel-body">
											{tap2Extend}
											{tap2Extend ? <div className="hr-line-dashed"></div> : ''}
											{tap2Content}
											{tap2Content ? <div className="hr-line-dashed"></div> : ''}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<SideBar />
			</div>
		);
	}
}

LearnLesson.propTypes = {
	lessonDetail: PropTypes.object,
	lessonActionCreators: PropTypes.shape({
		fetchLessonDetail: PropTypes.func,
	}),
	token: PropTypes.string,
};

const mapStateToProps = state => {
	return {
		lessonDetail: state.lessons.lessonDetail,
		token: state.user.token,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		lessonActionCreators: bindActionCreators(lessonActions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LearnLesson));
