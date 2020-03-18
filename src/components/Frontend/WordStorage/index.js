import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import * as wordActions from '../../../redux/actions/word';
import DataTable from 'react-data-table-component';
import { TextField, conditionalRowStyles } from '../../../commons/tableStyles';
import PropTypes from 'prop-types';
import SideBar from '../SideBar';
import { API_ENDPOINT } from '../../../constants';


class WordStorage extends Component {
    constructor(props) {
		super(props);
		this.state = {
			filterText: '',
		};
	}

	componentDidMount() {
		const { token, history, wordActionCreators } = this.props;
		const { fetchWordInStorage } = wordActionCreators;
		if (token) {
			fetchWordInStorage(token);
		} else {
			history.push('/login');
		}
	}

	onFilterText = e => {
		let value = e.target.value;
		this.setState({
			filterText: value,
		});
	};

	removeWord = id => {
		const { removeWordFromStorage } = this.props.wordActionCreators;
		const { token } = this.props;
		removeWordFromStorage({ token, id });
	};

	render() {
		let { wordInStorage } = this.props;
        
		let { filterText } = this.state;

		let filteredItems = [];

		if (wordInStorage) {
			filteredItems = wordInStorage.filter(
				item => item.english && item.english.toLowerCase().includes(filterText.toLowerCase())
			);

			for (let i = 0; i < filteredItems.length; i++) {
				filteredItems[i].index = i + 1;
			}
		}

		const columns = [
			{
				name: '#',
				selector: 'index',
				sortable: true,
				grow: 1,
			},
			{
				name: 'English',
				selector: 'english',
				sortable: true,
				grow: 4,
			},
			{
				name: 'Vietnamese',
				selector: 'vietnamese',
				sortable: true,
				grow: 4,
			},
			{
				name: 'Audio',
				cell: row => <audio src={`${API_ENDPOINT}public${row.audio}`} controls />,
				grow: 4,
			},
			{
				name: 'Select',
				cell: row => (
					<button
						className="btn btn-primary dim"
						type="button"
						style={{ marginTop: '10px' }}
						onClick={() => this.removeWord(row.id)}
					>
						<i className="fa fa-floppy-o"></i> Remove
					</button>
				),
				grow: 2,
			},
		];

		return (
			<div className="row show-sidebar">
				<div className="col-sm-12 col-md-9">
					<div className="ibox float-e-margins">
						<div className="ibox-title">
							<h1 className="text-center">Words Storage</h1>
						</div>
						<div className="ibox-content">
							<form className="form-horizontal">
								<DataTable
									columns={columns}
									data={filteredItems}
									noHeader
									pagination
									subHeader
									subHeaderComponent={
										<div>
											<label>Search: &nbsp;</label>
											<TextField
												id="searchPhrase"
												type="text"
												placeholder="Filter By English"
												value={filterText}
												onChange={this.onFilterText}
											/>
										</div>
									}
									conditionalRowStyles={conditionalRowStyles}
								/>
								<div className="form-group">
									<div className="col-sm-4 col-sm-offset-4 text-right">
										<Link to="/words/learn/engtoviet">
											<button className="btn btn-success dim" type="button">
												Learn Word <i className="fa fa-arrow-right"></i>
											</button>
										</Link>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<SideBar />
			</div>
		);
	}
}

WordStorage.propTypes = {
	wordInStorage: PropTypes.array,
	token: PropTypes.string,
	wordActionCreators: PropTypes.shape({
		removeWordFromStorage: PropTypes.func,
		fetchWordInStorage: PropTypes.func,
	}),
};

const mapStateToProps = state => {
	return {
		wordInStorage: state.words.wordInStorage,
		token: state.user.token,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		wordActionCreators: bindActionCreators(wordActions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WordStorage));
