import React, { Component } from 'react';
import { API_ENDPOINT } from '../../../../constants';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LessonItem extends Component {
	render() {
		const { lesson, index } = this.props;
		return (
			<div className="col-sm-12">
				<div className="lesson-block m-b gray-bg">
					<div className="row">
						<div className="col-sm-4">
							<Link to={`/lessons/learn/${lesson.alias}`}>
								<img src={`${API_ENDPOINT}public${lesson.featured_image}`} alt={lesson.title} />
							</Link>
						</div>
						<div className="col-sm-8 lesson-block-content">
							<div className="lesson-number">Lesson: {index + 1}</div>
							<div className="lesson-title">
								<Link to={`/lessons/learn/${lesson.alias}`}>{lesson.title}</Link>
							</div>
							<div className="lesson-level">Level: {lesson.level}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

LessonItem.propTypes= {
	lesson: PropTypes.object,
	index: PropTypes.number
}

export default LessonItem;
