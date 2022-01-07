import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from './home/home.reducer';
import headerReducer from './header/header.reducer';
const reducers = combineReducers({
    homeReducer,
    headerReducer
});
export default reducers;