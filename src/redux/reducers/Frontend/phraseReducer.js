import * as actionTypes from '../../../constants/actionTypes';
import { toastSuccess, toastError } from '../../../commons/toastify';

const initialState = {
	phraseList: [],
	phraseOutStorage: [],
	filter: 'all',
	phraseCategory: [],
};

const phraseReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_PHRASE_SUCCESS: {
			return {
				...state,
				phraseList: action.payload.data,
			};
		}
		case actionTypes.FETCH_PHRASE_FAILED: {
			return {
				...state,
				phraseList: [],
			};
		}
		case actionTypes.FETCH_PHRASE_OUT_STORAGE_SUCCESS: {
			toastSuccess('Get Phrases Successfully!');
			return {
				...state,
				phraseOutStorage: action.payload.data.phrases,
				phraseCategory: action.payload.data.cat_phrases,
				filter: action.payload.data.filter ? action.payload.data.filter : 'all',
			};
		}
		case actionTypes.FETCH_PHRASE_OUT_STORAGE_FAILED: {
			toastError('Get Phrases Failed!');
			return {
				...state,
				phraseOutStorage: [],
				phraseCategory: [],
				filter: 'all',
			};
		}
		default:
			return {
				...state,
			};
	}
};

export default phraseReducer;
