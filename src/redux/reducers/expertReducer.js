import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    experts: [],
    loading: false,
    error: null
}

export const expertSlice = createSlice({
    name: "expert",
    initialState,
    reducers: {
        fetchExpertsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchExpertsSuccess: (state, action) => {
            state.loading = false;
            state.experts = action.payload;
            // console.log(action.payload);
            // console.log(state.experts);
        },
        fetchExpertsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { fetchExpertsStart, fetchExpertsSuccess, fetchExpertsFailure } = expertSlice.actions;
export default expertSlice.reducer;