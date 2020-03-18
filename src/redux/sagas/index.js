import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../../constants/actionTypes';

import { registerUserSaga, loginSaga, getUserInfoSaga, updateProfileSaga } from './userSaga';
import { getAllLessonSaga, getLessonDetailSaga } from './lessonSaga';
import {
	getAllPhraseSaga,
	getAllPhraseOutStorageSaga,
	addPhraseToStorageSaga,
	getAllPhraseInStorageSaga,
	removePhraseFromStorageSaga,
	getAllPhraseToLearnSaga,
} from './phraseSaga';
import {
	getAllWordSaga,
	getAllWordOutStorageSaga,
	addWordToStorageSaga,
	getAllWordInStorageSaga,
	removeWordFromStorageSaga,
	getAllWordToLearnSaga,
} from './wordSaga';

function* rootSaga() {
	yield takeLatest(actionTypes.REGISTER_USER, registerUserSaga);
	yield takeLatest(actionTypes.LOGIN, loginSaga);
	yield takeLatest(actionTypes.GET_USER_INFO, getUserInfoSaga);
	yield takeLatest(actionTypes.UPDATE_PROFILE, updateProfileSaga);

	yield takeLatest(actionTypes.FETCH_LESSON, getAllLessonSaga);
	yield takeLatest(actionTypes.FETCH_LESSON_DETAIL, getLessonDetailSaga);

	yield takeLatest(actionTypes.FETCH_WORD, getAllWordSaga);
	yield takeLatest(actionTypes.FETCH_WORD_OUT_STORAGE, getAllWordOutStorageSaga);
	yield takeLatest(actionTypes.ADD_WORD_TO_STORAGE, addWordToStorageSaga);
	yield takeLatest(actionTypes.FETCH_WORD_IN_STORAGE, getAllWordInStorageSaga);
	yield takeLatest(actionTypes.REMOVE_WORD_FROM_STORAGE, removeWordFromStorageSaga);
	yield takeLatest(actionTypes.FETCH_WORD_TO_LEARN, getAllWordToLearnSaga);

	yield takeLatest(actionTypes.FETCH_PHRASE, getAllPhraseSaga);
	yield takeLatest(actionTypes.FETCH_PHRASE_OUT_STORAGE, getAllPhraseOutStorageSaga);
	yield takeLatest(actionTypes.FETCH_PHRASE_IN_STORAGE, getAllPhraseInStorageSaga);
	yield takeLatest(actionTypes.ADD_PHRASE_TO_STORAGE, addPhraseToStorageSaga);
	yield takeLatest(actionTypes.REMOVE_PHRASE_FROM_STORAGE, removePhraseFromStorageSaga);
	yield takeLatest(actionTypes.FETCH_PHRASE_TO_LEARN, getAllPhraseToLearnSaga);
}

export default rootSaga;
