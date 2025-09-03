import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    experts: [],
    location: [],
    category: [],
    serviceType: {},
    pricingType: [],
    loading: false,
    error: null
}

export const expertSlice = createSlice({
    name: "expert",
    initialState,
    reducers: {
        fetchExpertsSuccess: (state, action) => {
            state.loading = false;
            state.experts = action.payload;
        },
        fetchExpertsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchExpertByLocationSuccess: (state, action) => {
            state.loading = false;
            state.location = action.payload;

        },
        fetchExpertByLocationFaliure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchExpertByCategorySuccess: (state, action) => {
            state.loading = false;
            state.category = action.payload
        },
        fetchExpertByCategoryFaliure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        fetchExpertsByServiceTypeSuccess: (state, action) => {
            state.loading = false;
            state.serviceType[action?.payload?.parent_id] = action.payload?.data
        },
        fetchExpertsByServiceTypeFaliure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchExpertsByPricingTypeSuccess: (state, action) => {
            state.loading = false;
            state.pricingType = action.payload
        },
        fetchExpertsByPricingTypeFaluire: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        setExpertReducerState: (state, action) => {
            state[action.payload.name] = action.payload.value


        }
    }
})

export const {
    fetchExpertsSuccess,
    fetchExpertsFailure,
    fetchExpertByLocationSuccess,
    fetchExpertByLocationFaliure,
    setExpertReducerState,
    fetchExpertByCategorySuccess,
    fetchExpertByCategoryFaliure,
    fetchExpertsByServiceTypeSuccess,
    fetchExpertsByServiceTypeFaliure,
    fetchExpertsByPricingTypeSuccess,
    fetchExpertsByPricingTypeFaluire
} = expertSlice.actions;


export default expertSlice.reducer;