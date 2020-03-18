import { call, put } from 'redux-saga/effects';
import {
	fetchPhrasesSuccess,
	fetchPhrasesFailed,
	fetchPhraseOutStorageSuccess,
	fetchPhraseOutStorageFailed,
	addPhraseToStorageSuccess,
	addPhraseToStorageFailed,
	fetchPhraseInStorageSuccess,
	fetchPhraseInStorageFailed,
	removePhraseFromStorageSuccess,
	removePhraseFromStorageFailed,
	fetchPhraseToLearnSuccess,
	fetchPhraseToLearnFailed
} from '../actions/phrase';
import { getAllPhraseApi, getAllPhraseOutStorageApi, addPhraseToStorageApi, getAllPhraseInStorageApi, removePhraseFromStorageApi, getPhraseToLearnApi } from '../../apis/phrase';

export function* getAllPhraseSaga() {
	const res = yield call(getAllPhraseApi);

	const { data, status } = res;
	if (status === 200) {
		yield put(fetchPhrasesSuccess(data));
	} else {
		yield put(fetchPhrasesFailed(data));
	}
}

export function* getAllPhraseOutStorageSaga({ payload }) {
	const res = yield call(getAllPhraseOutStorageApi, payload);
	
	const { data, status } = res;
	if (status === 200) {
		yield put(fetchPhraseOutStorageSuccess(data));
	} else {
		yield put(fetchPhraseOutStorageFailed(data));
	}
}

export function* getAllPhraseInStorageSaga({ payload }) {
	const res = yield call(getAllPhraseInStorageApi, payload);
	
	const { data, status } = res;
	if (status === 200) {
		yield put(fetchPhraseInStorageSuccess(data));
	} else {
		yield put(fetchPhraseInStorageFailed(data));
	}
}

export function* addPhraseToStorageSaga({ payload }) {
	const res = yield call(addPhraseToStorageApi, payload);
	
	const { data, status } = res;
	if (status === 200) {
		yield put(addPhraseToStorageSuccess(data));
	} else {
		yield put(addPhraseToStorageFailed(data));
	}
}

export function* removePhraseFromStorageSaga({ payload }) {
	const res = yield call(removePhraseFromStorageApi, payload);
	
	const { data, status } = res;
	if (status === 200) {
		yield put(removePhraseFromStorageSuccess(data));
	} else {
		yield put(removePhraseFromStorageFailed(data));
	}
}

export function* getAllPhraseToLearnSaga({ payload }) {
	const res = yield call(getPhraseToLearnApi, payload);
	
	const { data, status } = res;
	if (status === 200) {
		yield put(fetchPhraseToLearnSuccess(data));
	} else {
		yield put(fetchPhraseToLearnFailed(data));
	}
}
