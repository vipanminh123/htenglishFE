import * as actionTypes from '../../../constants/actionTypes';
import { toastSuccess, toastError } from '../../../commons/toastify';

const initialState = {
	phraseList: [],
	phraseOutStorage: [],
	phraseCategory: [],
	phraseInStorage: [],
	phraseToLearn: [],
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
			};
		}
		case actionTypes.FETCH_PHRASE_OUT_STORAGE_FAILED: {
			toastError('Get Phrases Failed!');
			return {
				...state,
				phraseOutStorage: [],
				phraseCategory: [],
			};
		}

		case actionTypes.FETCH_PHRASE_IN_STORAGE_SUCCESS: {
			toastSuccess('Get Phrases Successfully!');
			return {
				...state,
				phraseInStorage: action.payload.data.phrases,
				phraseCategory: action.payload.data.cat_phrases,
			};
		}
		case actionTypes.FETCH_PHRASE_IN_STORAGE_FAILED: {
			toastError('Get Phrases Failed!');
			return {
				...state,
				phraseInStorage: [],
				phraseCategory: [],
			};
		}

		case actionTypes.ADD_PHRASE_TO_STORAGE_SUCCESS: {
			toastSuccess('Add Successfully!');
			let { data } = action.payload;
			return {
				...state,
				phraseOutStorage: data,
			};
		}
		case actionTypes.ADD_PHRASE_TO_STORAGE_FAILED: {
			toastError('Add Failed!');
			return {
				...state,
			};
		}

		case actionTypes.REMOVE_PHRASE_FROM_STORAGE_SUCCESS: {
			toastSuccess('Add Successfully!');
			let { data } = action.payload;
			return {
				...state,
				phraseInStorage: data,
			};
		}
		case actionTypes.REMOVE_PHRASE_FROM_STORAGE_FAILED: {
			toastError('Add Failed!');
			return {
				...state,
			};
		}

		case actionTypes.FETCH_PHRASE_TO_LEARN_SUCCESS: {
			toastSuccess('Get Phrases Successfully!');
			return {
				...state,
				phraseToLearn: action.payload.data,
			};
		}
		case actionTypes.FETCH_PHRASE_TO_LEARN_FAILED: {
			toastError('Get Phrases Failed!');
			return {
				...state,
				phraseToLearn: [],
			};
		}
		
		default:
			return {
				...state,
			};
	}
};

export default phraseReducer;
