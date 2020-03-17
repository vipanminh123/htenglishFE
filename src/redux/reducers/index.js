import { combineReducers } from 'redux';
import lessonReducer from './Frontend/lessonReducer';
import phraseReducer from './Frontend/phraseReducer';
import wordReducer from './Frontend/wordReducer';
import userReducer from './Frontend/userReducer';

const appReducer = combineReducers({
	// Frontend
	lessons: lessonReducer,
	phrases: phraseReducer,
	words: wordReducer,
	user: userReducer
});

export default appReducer;
