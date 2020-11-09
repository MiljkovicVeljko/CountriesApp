import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from './paginationSlice';
import themeReducer from './themeSlice';

const store = configureStore({
    reducer: {
        pagination: paginationReducer,
        theme: themeReducer
    }
});

export default store;