import * as actionTypes from '../../../constants/actionTypes';
import { toastError } from '../../../commons/toastify';

const initialState = {
	lessonList: [],
	lessonDetail: null,
};

const lessonReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_LESSON_SUCCESS: {
			return {
				...state,
				lessonList: action.payload.data,
			};
		}
		case actionTypes.FETCH_LESSON_FAILED: {
			toastError(action.payload.error);
			return {
				...state,
				lessonList: [],
			};
		}
		case actionTypes.FETCH_LESSON_DETAIL_SUCCESS: {
			return {
				...state,
				lessonDetail: action.payload.lesson,
			};
		}
		case actionTypes.FETCH_LESSON_DETAIL_FAILED: {
			toastError(action.payload.error);
			return {
				...state,
				lessonDetail: null,
			};
		}
		default:
			return {
				...state,
			};
	}
};

export default lessonReducer;
