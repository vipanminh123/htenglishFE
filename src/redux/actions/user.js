import * as actionTypes from '../../constants/actionTypes';

// Register Actions
export const registerUser = data => {
	return {
		type: actionTypes.REGISTER_USER,
		payload: {
			data,
		},
	};
};

export const registerUserSuccess = data => {
	return {
		type: actionTypes.REGISTER_USER_SUCCESS,
		payload: {
			data,
		},
	};
};

export const registerUserFailed = error => {
	return {
		type: actionTypes.REGISTER_USER_FAILED,
		payload: {
			error,
		},
	};
};

// Login Actions
export const loginAction = data => {
	return {
		type: actionTypes.LOGIN,
		payload: {
			data,
		},
	};
};

export const loginActionSuccess = data => {
	return {
		type: actionTypes.LOGIN_SUCCESS,
		payload: {
			data,
		},
	};
};

export const loginActionFailed = error => {
	return {
		type: actionTypes.LOGIN_FAILED,
		payload: {
			error,
		},
	};
};

// Logout Actions
export const logoutAction = () => {
	return {
		type: actionTypes.LOGOUT,
	};
};

// Get User Info Actions
export const getUserInfo = token => {
	return {
		type: actionTypes.GET_USER_INFO,
		payload: {
			token,
		},
	};
};

export const getUserInfoSuccess = user => {
	return {
		type: actionTypes.GET_USER_INFO_SUCCESS,
		payload: {
			user,
		},
	};
};

export const getUserInfoFailed = error => {
	return {
		type: actionTypes.GET_USER_INFO_FAILED,
		payload: {
			error,
		},
	};
};

// Update Profile Actions
export const updateProfile = data => {
	return {
		type: actionTypes.UPDATE_PROFILE,
		payload: {
			data,
		},
	};
};

export const updateProfileSuccess = data => {
	return {
		type: actionTypes.UPDATE_PROFILE_SUCCESS,
		payload: {
			data,
		},
	};
};

export const updateProfileFailed = error => {
	return {
		type: actionTypes.UPDATE_PROFILE_FAILED,
		payload: {
			error,
		},
	};
};
