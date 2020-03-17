import * as actionTypes from '../../../constants/actionTypes';

const initialState = {
	wordList: [],
};

const wordReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_WORD_SUCCESS: {
			return {
				...state,
				wordList: action.payload.data,
			};
		}
		case actionTypes.FETCH_WORD_FAILED: {
			return {
				...state,
				wordList: [],
			};
		}
		default:
			return {
				...state,
			};
	}
};

export default wordReducer;
