import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import * as phraseActions from '../../../redux/actions/phrase';
import DataTable from 'react-data-table-component';
import { TextField, conditionalRowStyles } from '../../../commons/tableStyles';
import PropTypes from 'prop-types';
import SideBar from '../SideBar';
import { API_ENDPOINT } from '../../../constants';

class AllPhrasePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			filterCat: 'all',
		};
	}

	componentDidMount() {
		const { token, history, phraseActionCreators } = this.props;
		const { fetchPhraseOutStorage } = phraseActionCreators;
		if (token) {
			fetchPhraseOutStorage({
				token,
				filter: 'all',
			});
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

	filterHandleSubmit = e => {
		e.preventDefault();
	};

	handleSubmit = e => {
		e.preventDefault();
	};

	selectOnChange = e => {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value,
		});
	};

	checkboxChange = e => {
		e.preventDefault();
	};

	addToStorage = e => {
		e.preventDefault();
	};

	render() {
		let { phraseOutStorage, phraseCategory } = this.props;

		let { filterText, filterCat } = this.state;
		// console.log(phraseOutStorage);
		// console.log(phraseCategory);

		let filteredItems = [];

		if (phraseOutStorage) {
			filteredItems = phraseOutStorage.filter(
				item => item.english && item.english.toLowerCase().includes(filterText.toLowerCase())
			);

			if (filterCat !== 'all') {
				filteredItems = filteredItems.filter(
					item => item.english && item.cat_phrase_id.toString() === filterCat.toString()
				);
			}

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
				cell: row => <audio src={`${API_ENDPOINT}public${row.audio_normal}`} controls />,
				grow: 4,
			},
			{
				name: 'Select',
				cell: row => (
					<button
						className="btn btn-primary dim"
						type="button"
						style={{ marginTop: '10px' }}
						onClick={this.addToStorage}
					>
						<i className="fa fa-floppy-o"></i> Add
					</button>
				),
				grow: 1,
			},
		];

		let catOption = phraseCategory
			? phraseCategory.map((item, index) => {
					return (
						<option key={index} value={item.id}>
							{item.description}
						</option>
					);
			  })
			: '';

		return (
			<div className="row show-sidebar">
				<div className="col-sm-12 col-md-9">
					<div className="ibox float-e-margins">
						<div className="ibox-title">
							<h1 className="text-center">100 English Lessons</h1>
						</div>
						<div className="ibox-content">
							<form onSubmit={this.filterHandleSubmit}>
								<div className="form-group">
									<label className="col-sm-2 control-label">Filter by:</label>
									<div className="col-sm-10 m-b">
										<div className="input-group">
											<select
												className="form-control m-b filter_by_cat_phrase"
												name="filterCat"
												value={filterCat}
												onChange={this.selectOnChange}
											>
												<option value="all">All</option>
												{catOption}
											</select>
											<span className="input-group-btn">
												<button type="submit" className="btn btn-primary">
													Go!
												</button>
											</span>
										</div>
									</div>
								</div>
							</form>
							<form className="form-horizontal" onSubmit={this.handleSubmit}>
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
												placeholder="Filter By Name"
												value={filterText}
												onChange={this.onFilterText}
											/>
										</div>
									}
									conditionalRowStyles={conditionalRowStyles}
								/>
								<div className="form-group">
									<div className="col-sm-4 col-sm-offset-4 text-right">
										<a href="/phrases/storage">
											<button className="btn btn-success dim" type="button">
												Go To storage <i className="fa fa-arrow-right"></i>
											</button>
										</a>
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

AllPhrasePage.propTypes = {
	filter: PropTypes.string,
	phraseOutStorage: PropTypes.array,
	phraseCategory: PropTypes.array,
	token: PropTypes.string,
};

const mapStateToProps = state => {
	return {
		filter: state.phrases.filter,
		phraseOutStorage: state.phrases.phraseOutStorage,
		phraseCategory: state.phrases.phraseCategory,
		token: state.user.token,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		phraseActionCreators: bindActionCreators(phraseActions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AllPhrasePage));
