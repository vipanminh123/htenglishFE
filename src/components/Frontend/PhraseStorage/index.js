import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import * as phraseActions from '../../../redux/actions/phrase';
import DataTable from 'react-data-table-component';
import { TextField, conditionalRowStyles } from '../../../commons/tableStyles';
import PropTypes from 'prop-types';
import SideBar from '../SideBar';
import { API_ENDPOINT } from '../../../constants';

class PhraseStorage extends Component {
    constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			filterCat: 'all',
		};
	}

	componentDidMount() {
		const { token, history, phraseActionCreators } = this.props;
		const { fetchPhraseInStorage } = phraseActionCreators;
		if (token) {
			fetchPhraseInStorage(token);
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

	selectOnChange = e => {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value,
		});
	};

	removePhrase = id => {
		const { removePhraseFromStorage } = this.props.phraseActionCreators;
		const { token } = this.props;
		removePhraseFromStorage({ token, id });
	};

	render() {
		let { phraseInStorage, phraseCategory } = this.props;
        
		let { filterText, filterCat } = this.state;

		let filteredItems = [];

		if (phraseInStorage) {
			filteredItems = phraseInStorage.filter(
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
						onClick={() => this.removePhrase(row.id)}
					>
						<i className="fa fa-floppy-o"></i> Remove
					</button>
				),
				grow: 2,
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
							<h1 className="text-center">Phrases Storage</h1>
						</div>
						<div className="ibox-content">
							<form>
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
												<button type="button" className="btn btn-primary">
													Go!
												</button>
											</span>
										</div>
									</div>
								</div>
							</form>
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
										<Link to="/phrases/learn/engtoviet">
											<button className="btn btn-success dim" type="button">
												Learn Phrase <i className="fa fa-arrow-right"></i>
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

PhraseStorage.propTypes = {
	phraseInStorage: PropTypes.array,
	phraseCategory: PropTypes.array,
	token: PropTypes.string,
	phraseActionCreators: PropTypes.shape({
		removePhraseFromStorage: PropTypes.func,
		fetchPhraseInStorage: PropTypes.func,
	}),
};

const mapStateToProps = state => {
	return {
		phraseInStorage: state.phrases.phraseInStorage,
		phraseCategory: state.phrases.phraseCategory,
		token: state.user.token,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		phraseActionCreators: bindActionCreators(phraseActions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PhraseStorage));
