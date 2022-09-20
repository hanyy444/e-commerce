import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from 'redux-persist'
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";
import rootSaga from "./root-saga";
import createSagaMiddleware from 'redux-saga'
// TODO: apply loggero only in development
// const middlewares = [logger, thunk];

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, thunk, sagaMiddleware];

// NOTE: states live here 
const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store)

export default store;