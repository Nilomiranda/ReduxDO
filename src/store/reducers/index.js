/**
 * This file is responsible for combining all the reducers we create
 * using combineReducers function from 'redux'
 */

import { combineReducers } from "redux";

import todos from "./todos";

export default combineReducers({
  todos
});
