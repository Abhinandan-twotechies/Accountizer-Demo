import { all } from "redux-saga/effects";
import expertSaga from "./expertSaga";

export function* rootSaga() {
    yield all([
        expertSaga()
    ])
}