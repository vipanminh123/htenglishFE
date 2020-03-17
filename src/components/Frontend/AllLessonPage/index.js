import React, { Component } from 'react';
import LessonList from '../../Frontend/HomePage/LessonList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lessonActions from '../../../redux/actions/lesson';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import SideBar from '../SideBar';

class AllLessonPage extends Component {
	componentDidMount() {
		const { lessonActionCreators, history, token } = this.props;
		if (!token && history) {
			history.push('/login');
		} else {
			const { fetchLessons } = lessonActionCreators;
			fetchLessons();
		}
	}

	render() {
		const { lessonList } = this.props;
		return (
			<div className="row show-sidebar">
				<div className="col-sm-12 col-md-9">
					<div className="ibox float-e-margins">
						<div className="ibox-title">
							<h1 className="text-center">100 English Lessons</h1>
						</div>
						<div className="ibox-content">
							<LessonList lessonList={lessonList} number={lessonList.length} />
						</div>
					</div>
				</div>
				<SideBar />
			</div>
		);
	}
}

AllLessonPage.propTypes = {
	lessonList: PropTypes.array,
	lessonActionCreators: PropTypes.shape({
		fetchLessons: PropTypes.func,
	}),
	token: PropTypes.string,
};

const mapStateToProps = state => {
	return {
		lessonList: state.lessons.lessonList,
		token: state.user.token,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		lessonActionCreators: bindActionCreators(lessonActions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AllLessonPage));
