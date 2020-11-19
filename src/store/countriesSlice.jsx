import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../shared/constants/http.constants";

export const getCountries = createAsyncThunk("countries/getCountries", async () => {
    const result = await axios(`${API_BASE_URL}all`).then(response => response.data);
    return result;
});

export const countriesSlice = createSlice({
    name: "countries",
    initialState: {
        countries: [],
        loading: false,
        error: ""
    },
    reducers: {},
    extraReducers: {
        [getCountries.fulfilled]: (state, action) => {
            state.loading = false;
            state.countries = action.payload;
        }
    },
});

export const { filterCountries } = countriesSlice.actions;
export const selectCountries = state => state.countries.countries;
export default countriesSlice.reducer;