import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../../constants/actionTypes';

import { registerUserSaga, loginSaga, getUserInfoSaga, updateProfileSaga } from './userSaga';
import { getAllLessonSaga, getLessonDetailSaga } from './lessonSaga';
import { getAllPhraseSaga, getAllPhraseOutStorageSaga } from './phraseSaga';
import { getAllWordSaga } from './wordSaga';

function* rootSaga() {
	yield takeLatest(actionTypes.FETCH_LESSON, getAllLessonSaga);
	yield takeLatest(actionTypes.FETCH_PHRASE, getAllPhraseSaga);
	yield takeLatest(actionTypes.FETCH_WORD, getAllWordSaga);
	yield takeLatest(actionTypes.REGISTER_USER, registerUserSaga);
	yield takeLatest(actionTypes.LOGIN, loginSaga);
	yield takeLatest(actionTypes.GET_USER_INFO, getUserInfoSaga);
	yield takeLatest(actionTypes.UPDATE_PROFILE, updateProfileSaga);
	yield takeLatest(actionTypes.FETCH_LESSON_DETAIL, getLessonDetailSaga);
	yield takeLatest(actionTypes.FETCH_PHRASE_OUT_STORAGE, getAllPhraseOutStorageSaga);
}

export default rootSaga;
