import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as phraseActions from '../../../../redux/actions/phrase';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { API_ENDPOINT } from '../../../../constants';
import Sidebar from '../../SideBar';

class VietToEng extends Component {
    componentDidMount() {
        const { token, history, phraseActionCreators } = this.props;
		const { fetchPhraseToLearn } = phraseActionCreators;
        
		if (token) {
			fetchPhraseToLearn(token);
		} else {
			history.push('/login');
		}
    }
	render() {
        let { phraseToLearn } = this.props;
        let xhtml = phraseToLearn ? phraseToLearn.map((phrase, index) => {
            return (
                <div key={index}>
                    <div className="form-group">
                        <label className="col-sm-12">{phrase.vietnamese}</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control input-content" />
                            <input type="hidden" className="input-result" value={phrase.english} />
                        </div>
                        <div className="col-sm-2">
                            <audio src={`${API_ENDPOINT}public${phrase.audio_normal}`} controls />
                        </div>
                        <div className="col-sm-2">
                            <strong className="hidden hide-check-true">TRUE</strong>
                            <strong className="hidden hide-check-false">FALSE</strong>
                        </div>
                        <label className="col-sm-12 hide-result hidden">Result: <span>{phrase.english}</span></label>
                    </div>
                    <div className="hr-line-dashed"></div>
                </div>
            );
        }) : '';
		return (
            <div className="row show-sidebar">
                <div className="col-md-9">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <h1 className="text-center">Learn Phrase: Vietnamese to English</h1>
                        </div>
                        <div className="ibox-content form-horizontal">
                            
                            {xhtml}

                            <div className="form-group">
                                <div className="col-sm-5 col-sm-offset-2">
                                    <button className="btn btn-success dim" type="button" id="button-check-result">Check</button>
                                    <button className="btn btn-primary dim hidden" type="button" id="button-show-result">Show Result</button>
                                    <label className="m-l" id="show-result-total"></label>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>
        );
	}
}

VietToEng.propTypes = {
    phraseToLearn: PropTypes.array,
    token: PropTypes.string,
    phraseActionCreators: PropTypes.shape({
        fetchPhraseToLearn: PropTypes.func
    })
};

const mapStateToProps = state => {
	return {
		phraseToLearn: state.phrases.phraseToLearn,
		token: state.user.token,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		phraseActionCreators: bindActionCreators(phraseActions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(VietToEng));
