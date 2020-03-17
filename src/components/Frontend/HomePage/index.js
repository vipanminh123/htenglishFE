import React, { Component } from 'react';
import LessonContainer from './containers/LessonContainer';
import PhraseContainer from './containers/PhraseContainer';
import WordContainer from './containers/WordContainer';

class HomePage extends Component {
	render() {
		return (
			<div className="row">
				<LessonContainer />

				<PhraseContainer />

				<WordContainer />
			</div>
		);
	}
}

export default HomePage;
