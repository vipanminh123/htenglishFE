import React, { Component } from 'react';
import LessonItem from '../LessonItem';
import PropTypes from 'prop-types';

class LessonList extends Component {
	renderItem() {
		let xhtml = '';
		const { lessonList, number } = this.props;
		// console.log(lessonList);
		xhtml = lessonList.map((lesson, index) => {
			if (index < number) {
				return <LessonItem key={lesson.id} lesson={lesson} index={index} />;
			} else {
				return '';
			}
		});
		return xhtml;
	}

	render() {
		return <div className="row">{this.renderItem()}</div>;
	}
}

LessonItem.propTypes = {
	lessonList: PropTypes.array,
};

export default LessonList;
