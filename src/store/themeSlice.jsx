import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        setTheme: (state, action) => state = action.payload
    },
});

export const { setTheme } = themeSlice.actions;
export const selectTheme = state => state.theme;
export default themeSlice.reducer;