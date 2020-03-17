import { createStore, compose, applyMiddleware } from 'redux';
import appReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const composeEnhancers =
	process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				shouldHotReload: false,
		  })
		: compose;
const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
	const middleWare = [sagaMiddleware];
	const enhancers = [applyMiddleware(...middleWare)];
	const store = createStore(appReducer, composeEnhancers(...enhancers));

	sagaMiddleware.run(rootSaga);
	return store;
};

export default configStore;
