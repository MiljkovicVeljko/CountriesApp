import { createSlice } from "@reduxjs/toolkit";

export const operationSlice = createSlice({
    name: "operation",
    initialState: {
        updatedCountries: [],
    },
    reducers: {
        filterCountries: (state, action) => {
            const {countries, region} = action.payload;
            state.updatedCountries = countries.filter(country => country.region === region)
        }
    },
});

export const { filterCountries } = operationSlice.actions;
export const selectUpdatedCountries = state => state.operation.updatedCountries;
export default operationSlice.reducer;