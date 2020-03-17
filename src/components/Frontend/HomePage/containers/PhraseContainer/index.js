import React, { Component } from 'react';
import PhraseList from '../../PhraseList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as phraseActions from '../../../../../redux/actions/phrase';
import { Link } from 'react-router-dom';

class PhraseContainer extends Component {
	componentDidMount() {
		const { fetchPhrases } = this.props.phraseActionCreators;
		fetchPhrases();
	}

	render() {
		const { phraseList } = this.props;
		return (
			<div className="col-md-12">
				<div className="ibox float-e-margins">
					<div className="ibox-title">
						<h1 className="text-center">1000 Most Common English Phrases</h1>
					</div>
					<div className="ibox-content">
						<PhraseList phraseList={phraseList} />

						<div className="text-center">
							<Link to="/phrases" className="btn btn-success btn-lg">
								Learn Phrase
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

PhraseContainer.propTypes = {
	phraseList: PropTypes.array,
	phraseActionCreators: PropTypes.shape({
		fetchPhrases: PropTypes.func,
	}),
};

const mapStateToProps = state => {
	return {
		phraseList: state.phrases.phraseList,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		phraseActionCreators: bindActionCreators(phraseActions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PhraseContainer);
