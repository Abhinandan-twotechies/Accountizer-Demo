import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { expertAPI } from "../API/expertApi";
import { fetchExpertsStart, fetchExpertsSuccess, fetchExpertsFailure } from "../reducers/expertReducer";

// worker saga
function* fetchExperts() {
    try {
        const response = yield call(expertAPI);
        yield put(fetchExpertsSuccess(response.data));
    } catch (error) {
        yield put(fetchExpertsFailure(error.message));
    }
}


// watcher saga
function* expertSaga() {
    yield takeLatest(fetchExpertsStart.type, fetchExperts);
}

export default expertSaga;