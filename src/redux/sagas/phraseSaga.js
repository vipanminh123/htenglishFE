import { call, put } from 'redux-saga/effects';
import { fetchPhrasesSuccess, fetchPhrasesFailed, fetchPhraseOutStorageSuccess, fetchPhraseOutStorageFailed } from '../actions/phrase';
import { getAllPhraseApi, getAllPhraseOutStorageApi } from '../../apis/phrase';

export function* getAllPhraseSaga() {
	const res = yield call(getAllPhraseApi);

	const { data, status } = res;
	if (status === 200) {
		yield put(fetchPhrasesSuccess(data));
	} else {
		yield put(fetchPhrasesFailed(data));
	}
}

export function* getAllPhraseOutStorageSaga({payload}) {
	// const { token, filter } = payload;
	const res = yield call(getAllPhraseOutStorageApi, payload);
	
	const { data, status } = res;
	if (status === 200) {
		yield put(fetchPhraseOutStorageSuccess(data));
	} else {
		yield put(fetchPhraseOutStorageFailed(data));
	}
}
