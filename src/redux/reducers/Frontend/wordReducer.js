import * as actionTypes from '../../../constants/actionTypes';
import { toastError, toastSuccess } from '../../../commons/toastify';

const initialState = {
	wordList: [],
	wordOutStorage: [],
	wordInStorage: [],
	wordToLearn: [],
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

		case actionTypes.FETCH_WORD_OUT_STORAGE_SUCCESS: {
			toastSuccess('Get Words Successfully!');
			return {
				...state,
				wordOutStorage: action.payload.data,
			};
		}
		case actionTypes.FETCH_WORD_OUT_STORAGE_FAILED: {
			toastError('Get Words Failed!');
			return {
				...state,
				wordOutStorage: [],
			};
		}

		case actionTypes.ADD_WORD_TO_STORAGE_SUCCESS: {
			toastSuccess('Add Successfully!');
			return {
				...state,
				wordOutStorage: action.payload.data,
			};
		}
		case actionTypes.ADD_WORD_TO_STORAGE_FAILED: {
			toastError('Add Failed!');
			return {
				...state,
			};
		}

		case actionTypes.FETCH_WORD_IN_STORAGE_SUCCESS: {
			toastSuccess('Get Words Successfully!');
			return {
				...state,
				wordInStorage: action.payload.data,
			};
		}
		case actionTypes.FETCH_WORD_IN_STORAGE_FAILED: {
			toastError('Get Words Failed!');
			return {
				...state,
				wordInStorage: [],
			};
		}

		case actionTypes.REMOVE_WORD_FROM_STORAGE_SUCCESS: {
			toastSuccess('Add Successfully!');
			return {
				...state,
				wordInStorage: action.payload.data,
			};
		}
		case actionTypes.REMOVE_WORD_FROM_STORAGE_FAILED: {
			toastError('Add Failed!');
			return {
				...state,
			};
		}

		case actionTypes.FETCH_WORD_TO_LEARN_SUCCESS: {
			toastSuccess('Get Phrases Successfully!');
			return {
				...state,
				wordToLearn: action.payload.data,
			};
		}
		case actionTypes.FETCH_WORD_TO_LEARN_FAILED: {
			toastError('Get Phrases Failed!');
			return {
				...state,
				wordToLearn: [],
			};
		}
		
		default:
			return {
				...state,
			};
	}
};

export default wordReducer;
