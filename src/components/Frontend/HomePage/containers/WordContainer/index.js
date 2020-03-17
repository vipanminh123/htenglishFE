import React, { Component } from 'react';
import WordList from '../../WordList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as WordActions from '../../../../../redux/actions/word';
import { Link } from 'react-router-dom';

class WordContainer extends Component {
	componentDidMount() {
		const { fetchWords } = this.props.wordActionCreators;
		fetchWords();
	}

	render() {
		const { wordList } = this.props;
		return (
			<div className="col-md-12">
				<div className="ibox float-e-margins">
					<div className="ibox-title">
						<h1 className="text-center">1000 Most Common English Words</h1>
					</div>
					<div className="ibox-content">
						<WordList wordList={wordList} />

						<div className="text-center">
							<Link to="/words" className="btn btn-success btn-lg">
								Learn Word
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

WordContainer.propTypes = {
	wordList: PropTypes.array,
	wordActionCreators: PropTypes.shape({
		fetchWords: PropTypes.func,
	}),
};

const mapStateToProps = state => {
	return {
		wordList: state.words.wordList,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		wordActionCreators: bindActionCreators(WordActions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(WordContainer);
