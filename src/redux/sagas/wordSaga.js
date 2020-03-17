import { call, put } from 'redux-saga/effects';
import { fetchWordsSuccess, fetchWordsFailed } from '../actions/word';
import { getAllWordApi } from '../../apis/word';

export function* getAllWordSaga() {
	const res = yield call(getAllWordApi);

	const { data, status } = res;
	if (status === 200) {
		yield put(fetchWordsSuccess(data));
	} else {
		yield put(fetchWordsFailed(data));
	}
}
