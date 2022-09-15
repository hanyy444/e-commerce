import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";


const middlewares = [logger];

// NOTE: states live here 
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;