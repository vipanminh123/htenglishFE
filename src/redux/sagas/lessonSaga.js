import { call, put } from 'redux-saga/effects';
import { fetchLessonsSuccess, fetchLessonsFailed, fetchLessonDetailSuccess, fetchLessonDetailFailed } from '../actions/lesson';
import { getAllLessonApi, getLessonDetailApi } from '../../apis/lesson';

export function* getAllLessonSaga() {
	const res = yield call(getAllLessonApi);

	const { data, status } = res;
	if (status === 200) {
		yield put(fetchLessonsSuccess(data));
	} else {
		yield put(fetchLessonsFailed(data));
	}
}

export function* getLessonDetailSaga({payload}) {
	const { alias } = payload;
	const res = yield call(getLessonDetailApi, alias);
	
	const { data, status } = res;
	if (status === 200) {
		yield put(fetchLessonDetailSuccess(data));
	} else {
		yield put(fetchLessonDetailFailed(data));
	}
}
