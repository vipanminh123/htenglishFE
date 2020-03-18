import { call, put } from 'redux-saga/effects';
import {
	fetchWordsSuccess,
	fetchWordsFailed,
	fetchWordOutStorageSuccess,
	fetchWordOutStorageFailed,
	addWordToStorageSuccess,
	addWordToStorageFailed,
	fetchWordInStorageSuccess,
	fetchWordInStorageFailed,
	removeWordFromStorageSuccess,
	removeWordFromStorageFailed,
	fetchWordToLearnSuccess,
	fetchWordToLearnFailed
} from '../actions/word';
import {
	getAllWordApi,
	getAllWordOutStorageApi,
	addWordToStorageApi,
	getAllWordInStorageApi,
	removeWordFromStorageApi,
	getWordToLearnApi,
} from '../../apis/word';

export function* getAllWordSaga() {
	const res = yield call(getAllWordApi);

	const { data, status } = res;
	if (status === 200) {
		yield put(fetchWordsSuccess(data));
	} else {
		yield put(fetchWordsFailed(data));
	}
}

export function* getAllWordOutStorageSaga({ payload }) {
	const res = yield call(getAllWordOutStorageApi, payload);

	const { data, status } = res;
	if (status === 200) {
		yield put(fetchWordOutStorageSuccess(data));
	} else {
		yield put(fetchWordOutStorageFailed(data));
	}
}

export function* addWordToStorageSaga({ payload }) {
	const res = yield call(addWordToStorageApi, payload);

	const { data, status } = res;
	if (status === 200) {
		yield put(addWordToStorageSuccess(data));
	} else {
		yield put(addWordToStorageFailed(data));
	}
}

export function* getAllWordInStorageSaga({ payload }) {
	const res = yield call(getAllWordInStorageApi, payload);

	const { data, status } = res;
	if (status === 200) {
		yield put(fetchWordInStorageSuccess(data));
	} else {
		yield put(fetchWordInStorageFailed(data));
	}
}

export function* removeWordFromStorageSaga({ payload }) {
	const res = yield call(removeWordFromStorageApi, payload);

	const { data, status } = res;
	if (status === 200) {
		yield put(removeWordFromStorageSuccess(data));
	} else {
		yield put(removeWordFromStorageFailed(data));
	}
}

export function* getAllWordToLearnSaga({ payload }) {
	const res = yield call(getWordToLearnApi, payload);

	const { data, status } = res;
	if (status === 200) {
		yield put(fetchWordToLearnSuccess(data));
	} else {
		yield put(fetchWordToLearnFailed(data));
	}
}
