import { configureStore } from "@reduxjs/toolkit";
import { rootSaga } from "../saga/rootSaga";
import rootReducer from "../reducers/rootReducers";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);
export default store;