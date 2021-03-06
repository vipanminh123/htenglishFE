import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { TextField, conditionalRowStyles } from '../../../../commons/tableStyles';
import PropTypes from 'prop-types';

class PhraseList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
		};
	}

	onFilter = e => {
		let value = e.target.value;
		this.setState({
			filterText: value,
		});
	};

	render() {
		const { phraseList } = this.props;
		const { filterText } = this.state;
		const filteredItems = phraseList.filter(item => item.english && item.english.toLowerCase().includes(filterText.toLowerCase()));
		for (let i = 0; i < filteredItems.length; i++) {
			filteredItems[i].index = i + 1;
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
		];
		
		return (
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
							onChange={this.onFilter}
						/>
					</div>
				}
				conditionalRowStyles={conditionalRowStyles}
			/>
		);
	}
}

PhraseList.propTypes = {
	phraseList: PropTypes.array,
};

export default PhraseList;
