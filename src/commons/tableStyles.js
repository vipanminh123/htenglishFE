import styled from 'styled-components';

export const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;
`;

export const conditionalRowStyles = [
	{
		when: row => row.index % 2 === 0,
		style: {
			backgroundColor: '#f9f9f9',
			'&:hover': {
				cursor: 'pointer',
			},
		},
	},
	{
		when: row => row.index % 2 !== 0,
		style: {
			'&:hover': {
				backgroundColor: '#f9f9f9',
			},
		},
	},
];
