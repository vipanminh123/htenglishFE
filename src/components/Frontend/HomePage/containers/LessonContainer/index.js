import React, { Component } from 'react';
import LessonList from '../../LessonList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lessonActions from '../../../../../redux/actions/lesson';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class LessonContainer extends Component {
	componentDidMount() {
		const { lessonActionCreators } = this.props;
		const { fetchLessons } = lessonActionCreators;
		fetchLessons();
	}

	render() {
		const { lessonList } = this.props;

		return (
			<div className="col-sm-12">
				<div className="ibox float-e-margins">
					<div className="ibox-title">
						<h1 className="text-center">100 English Lessons</h1>
					</div>
					<div className="ibox-content">
						<LessonList lessonList={lessonList} number={5} />

						<div className="text-center">
							<Link to="/lessons" className="btn btn-success btn-lg">
								More
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

LessonContainer.propTypes = {
	lessonList: PropTypes.array,
	lessonActionCreators: PropTypes.shape({
		fetchLessons: PropTypes.func,
	}),
};

const mapStateToProps = state => {
	return {
		lessonList: state.lessons.lessonList,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		lessonActionCreators: bindActionCreators(lessonActions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LessonContainer);
