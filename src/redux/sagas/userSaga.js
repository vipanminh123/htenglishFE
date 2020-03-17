import { call, put } from 'redux-saga/effects';
import {
	registerUserSuccess,
	registerUserFailed,
	loginActionSuccess,
	loginActionFailed,
	getUserInfo,
	getUserInfoSuccess,
	getUserInfoFailed,
	updateProfileSuccess,
	updateProfileFailed,
} from '../actions/user';
import { registerUserApi, loginApi, getUserInfoApi, updateProfileApi } from '../../apis/user';

export function* registerUserSaga({ payload }) {
	const { data: user } = payload;
	const res = yield call(registerUserApi, user);

	const { data, status } = res;

	if (status === 200 && data.status === 200) {
		yield put(registerUserSuccess(data));
	} else {
		yield put(registerUserFailed(data));
	}
}

export function* loginSaga({ payload }) {
	const { data: userInfo } = payload;
	const res = yield call(loginApi, userInfo);

	const { data, status } = res;

	if (status === 200 && data.status === 200) {
		yield put(getUserInfo(data.data));
		yield put(loginActionSuccess(data));
	} else {
		yield put(loginActionFailed(data));
	}
}

export function* getUserInfoSaga({ payload }) {
	const { token } = payload;
	const res = yield call(getUserInfoApi, token);
	const { data, status } = res;

	if (status === 200) {
		yield put(getUserInfoSuccess(data.data));
	} else {
		yield put(getUserInfoFailed(data));
	}
}

export function* updateProfileSaga({ payload }) {
	const { data: userInfo } = payload;
	const res = yield call(updateProfileApi, userInfo);
	const { data, status } = res;

	if (status === 200) {
		yield put(updateProfileSuccess(data));
	}
	else {
		yield put(updateProfileFailed(data));
	}
}
