import {createStore, applyMiddleware, combineReducers} from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { persistStore, persistCombineReducers } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

//store with persist
/**
 *
 * Redux Persist Configuration
 */
// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist:['menu']
// };
/**
 *
 * Making Persist Reducers
 */
// const persistedReducer = persistCombineReducers(persistConfig, reducers);

// export const store = createStore(persistedReducer, {}, applyMiddleware(thunk, logger));
// export const persistor = persistStore(store);

//for normal store
export const store = createStore(combineReducers(reducers), {}, applyMiddleware(thunk, logger));
