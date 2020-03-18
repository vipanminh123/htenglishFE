import HomePage from '../components/Frontend/HomePage';
import AllLessonPage from '../components/Frontend/AllLessonPage';
import AllPhrasePage from '../components/Frontend/AllPhrasePage';
import AllWordPage from '../components/Frontend/AllWordPage';
import LoginPage from '../components/Frontend/LoginPage';
import RegisterPage from '../components/Frontend/RegisterPage';
import GuidePage from '../components/Frontend/GuidePage';
import ProfilePage from '../components/Frontend/ProfilePage';
import PhraseStorage from '../components/Frontend/PhraseStorage';
import PhraseEngToViet from '../components/Frontend/LearnPhrase/EngToViet';
import PhraseVietToEng from '../components/Frontend/LearnPhrase/VietToEng';
import WordStorage from '../components/Frontend/WordStorage';
import LearnLesson from '../components/Frontend/LearnLesson';
import WordEngToViet from '../components/Frontend/LearnWord/EngToViet';
import WordVietToEng from '../components/Frontend/LearnWord/VietToEng';

export const ROUTES = [
	{
		path: '/',
		name: 'Home',
		exact: true,
		component: HomePage,
	},
	{
		path: '/lessons',
		name: '100 English Lessons',
		exact: true,
		component: AllLessonPage,
	},
	{
		path: '/phrases',
		name: '1000 Most Common English Phrases',
		exact: true,
		component: AllPhrasePage,
	},
	{
		path: '/words',
		name: '1000 Most Common English Words',
		exact: true,
		component: AllWordPage,
	},
	{
		path: '/login',
		name: 'Login',
		exact: false,
		component: LoginPage,
	},
	{
		path: '/register',
		name: 'Register',
		exact: false,
		component: RegisterPage,
	},
	{
		path: '/guide',
		name: 'Guide',
		exact: false,
		component: GuidePage,
	},
	{
		path: '/profile',
		name: 'Profile',
		exact: false,
		component: ProfilePage,
	},
	{
		path: '/phrases/storage',
		name: 'Phrases Storage',
		exact: false,
		component: PhraseStorage,
	},
	{
		path: '/words/storage',
		name: 'Words Storage',
		exact: false,
		component: WordStorage,
	},
	{
		path: '/phrases/learn/engtoviet',
		name: 'Phrases - Eng to Viet',
		exact: false,
		component: PhraseEngToViet,
	},
	{
		path: '/phrases/learn/viettoeng',
		name: 'Phrases - Viet to Eng',
		exact: false,
		component: PhraseVietToEng,
	},
	{
		path: '/words/learn/engtoviet',
		name: 'Words - Eng to Viet',
		exact: false,
		component: WordEngToViet,
	},
	{
		path: '/words/learn/viettoeng',
		name: 'Words - Viet to Eng',
		exact: false,
		component: WordVietToEng,
	},
	{
		path: '/lessons/learn',
		name: 'Learn Lesson',
		exact: false,
		component: LearnLesson,
		alias: true,
		aliasName: 'lessonAlias'
	},
];
