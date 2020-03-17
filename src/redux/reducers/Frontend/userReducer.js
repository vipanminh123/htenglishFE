import * as actionTypes from '../../../constants/actionTypes';
import { toastError, toastSuccess } from '../../../commons/toastify';

let localToken = localStorage.getItem('loginToken');

const initialState = {
	userInfo: null,
	token: localToken ? localToken : null,
	registered: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.REGISTER_USER_SUCCESS: {
			const { data } = action.payload;
			toastSuccess(data.message);
			return {
				...state,
				registered: true
			};
		}
		case actionTypes.REGISTER_USER_FAILED: {
			toastError(action.payload.error);
			return {
				...state,
				registered: false
			};
		}
		case actionTypes.LOGIN_SUCCESS: {
			const { data } = action.payload;
			localStorage.setItem('loginToken', data.data);
			toastSuccess(data.message);
			return {
				...state,
				token: data.data,
			};
		}
		case actionTypes.LOGIN_FAILED: {
			localStorage.removeItem('loginToken');
			toastError(action.payload.error);
			return {
				...state,
				token: null,
			};
		}
		case actionTypes.LOGOUT: {
			localStorage.removeItem('loginToken');
			return {
				...state,
				userInfo: null,
				token: null,
			};
		}
		case actionTypes.GET_USER_INFO_SUCCESS: {
			return {
				...state,
				userInfo: action.payload.user,
			};
		}
		case actionTypes.GET_USER_INFO_FAILED: {
			return {
				...state,
				userInfo: null,
			};
		}
		case actionTypes.UPDATE_PROFILE_SUCCESS: {
			const { data } = action.payload;
			toastSuccess(data.message);
			return {
				...state,
				userInfo: data.data,
			};
		}
		case actionTypes.UPDATE_PROFILE_FAILED: {
			toastError(action.payload.error);
			return {
				...state,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default userReducer;
