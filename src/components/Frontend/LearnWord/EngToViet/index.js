import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as wordActions from '../../../../redux/actions/word';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { API_ENDPOINT } from '../../../../constants';
import Sidebar from '../../SideBar';

class EngToViet extends Component {
	componentDidMount() {
		const { token, history, wordActionCreators } = this.props;
		const { fetchWordToLearn } = wordActionCreators;

		if (token) {
			fetchWordToLearn(token);
		} else {
			history.push('/login');
		}
	}

	render() {
		let { wordToLearn } = this.props;
		let xhtml = wordToLearn ? wordToLearn.map((word, index) => {
            return (
                <div key={index}>
                    <div className="form-group">
                        <label className="col-sm-12">{word.english}</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control input-content" />
                            <input type="hidden" className="input-result" value={word.vietnamese} />
                        </div>
                        <div className="col-sm-2">
                            <audio src={`${API_ENDPOINT}public${word.audio}`} controls />
                        </div>
                        <div className="col-sm-2">
                            <strong className="hidden hide-check-true">TRUE</strong>
                            <strong className="hidden hide-check-false">FALSE</strong>
                        </div>
                        <label className="col-sm-12 hide-result hidden">Result: <span>{word.vietnamese}</span></label>
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
							<h1 className="text-center">Learn Word: English to Vietnamese</h1>
						</div>
						<div className="ibox-content form-horizontal">
							{xhtml}

							<div className="form-group">
								<div className="col-sm-5 col-sm-offset-2">
									<button className="btn btn-success dim" type="button" id="button-check-result-word">
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
				</div>
				<Sidebar />
			</div>
		);
	}
}

EngToViet.propTypes = {
	wordToLearn: PropTypes.array,
	token: PropTypes.string,
	wordActionCreators: PropTypes.shape({
		fetchWordToLearn: PropTypes.func,
	}),
};

const mapStateToProps = state => {
	return {
		wordToLearn: state.words.wordToLearn,
		token: state.user.token,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		wordActionCreators: bindActionCreators(wordActions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EngToViet));
