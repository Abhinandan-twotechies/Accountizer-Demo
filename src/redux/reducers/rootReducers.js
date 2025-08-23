import { combineReducers } from "@reduxjs/toolkit";
import expertReducer from "./expertReducer";

const rootReducer = combineReducers({
    experts: expertReducer
})

export default rootReducer;