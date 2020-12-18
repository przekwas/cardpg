import { configureStore, combineReducers } from '@reduxjs/toolkit';

import enemyReducer from './enemySlice';
import playerReducer from './playerSlice';

const reducer = combineReducers({
	enemy: enemyReducer,
	player: playerReducer
});

const store = configureStore({ reducer });

export default store;
