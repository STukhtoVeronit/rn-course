import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import {createLogger} from 'redux-logger';

const initialState = {};

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);


// Redux-Persist
const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['auth', 'errors']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// if (process.env.NODE_ENV === `development`) {
const logger = createLogger({collapsed: true});
middlewares.push(logger);
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
		persistedReducer, // reducers
		initialState, // our state
		compose(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;