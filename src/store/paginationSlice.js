import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
    name: "pagination",
    initialState: 0,
    reducers: {
        setCurrentPage: (state, action) => state = action.payload
    },
});

export const { setCurrentPage } = paginationSlice.actions;
export const selectPagination = state => state.pagination;
export default paginationSlice.reducer;