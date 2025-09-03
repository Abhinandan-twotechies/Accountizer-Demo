import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { expertAPI, locationAPI, categoryAPI, serviceTypeAPI, pricingTypeAPI } from "../API/expertApi";
import {
    fetchExpertsSuccess,
    fetchExpertsFailure,
    setExpertReducerState,
    fetchExpertByLocationSuccess,
    fetchExpertByLocationFaliure,
    fetchExpertByCategorySuccess,
    fetchExpertByCategoryFaliure,
    fetchExpertsByServiceTypeSuccess,
    fetchExpertsByServiceTypeFaliure,
    fetchExpertsByPricingTypeSuccess,
    fetchExpertsByPricingTypeFaluire
} from "../reducers/expertReducer";

// worker saga
function* fetchExperts(action) {


    try {
        setExpertReducerState({ name: 'loading', value: true })
        const response = yield call(expertAPI, action.payload);


        yield put(fetchExpertsSuccess(response.data));
    } catch (error) {
        yield put(fetchExpertsFailure(error.message));
    }
}

function* fetchByLocation() {
    try {
        setExpertReducerState({ name: 'loading', value: true });
        const response = yield call(locationAPI);
        yield put(fetchExpertByLocationSuccess(response.data))

    }
    catch (error) {
        yield put(fetchExpertByLocationFaliure(error.message))
    }
}

function* fetchByCategory() {
    try {
        setExpertReducerState({ name: 'loading', value: true });
        const response = yield call(categoryAPI);

        yield put(fetchExpertByCategorySuccess(response.data))
    }
    catch (error) {
        yield put(fetchExpertByCategoryFaliure(error.message))
    }
}

function* fetchByServiceType(action) {
    const { id } = action.payload;
    try {
        setExpertReducerState({ name: 'loading', value: true });
        const response = yield call(serviceTypeAPI, id);
        yield put(fetchExpertsByServiceTypeSuccess({
            data: response.data,
            parent_id: id
        }))
    }
    catch (error) {
        console.log(error);

        yield put(fetchExpertsByServiceTypeFaliure(error.message))
    }
}

function* fetchByPricingType() {
    try {
        setExpertReducerState({ name: 'loading', value: true });
        const response = yield call(pricingTypeAPI);
        // console.log(response.data);

        yield put(fetchExpertsByPricingTypeSuccess(response.data))
    }
    catch (error) {
        yield put(fetchExpertsByPricingTypeFaluire(error.message))
    }
}
// watcher saga
function* expertSaga() {
    yield takeLatest('FETCH-EXPERT', fetchExperts);
    yield takeLatest('FETCH-BY-LOCATION', fetchByLocation);
    yield takeLatest('FETCH-BY-CATEGORY', fetchByCategory);
    yield takeLatest('FETCH-BY-SERVICE-TYPE', fetchByServiceType);
    yield takeLatest('FETCH-BY-PRICING-TYPE', fetchByPricingType);
}

export default expertSaga; 