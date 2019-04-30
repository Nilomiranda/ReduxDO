/**
 * This file is meant to be the configuration file
 * for our redux store
 */

import { createStore } from "redux";

import reducers from "./reducers";

const store = createStore(reducers);

export default store;
