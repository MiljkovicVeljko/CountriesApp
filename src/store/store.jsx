import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import paginationReducer from './paginationSlice';
import themeReducer from './themeSlice';
import countriesReducer from './countriesSlice';
import operationReducer from './operationSlice';
import logger from 'redux-logger';

const store = configureStore({
    reducer: {
        pagination: paginationReducer,
        theme: themeReducer,
        countries: countriesReducer,
        operation: operationReducer,
    },
    middleware: getDefaultMiddleware().concat(logger)
});

export default store;