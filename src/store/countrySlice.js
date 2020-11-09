// import { createSlice } from '@reduxjs/toolkit';

// let setTheme = '';
// const countrySlice = createSlice({
//     name: 'country',
//     // in case cart was saved items, will be here:
//     initialState: {
//         mode: 'light'
//     },
//     // reducers actions
//     reducers: {
//         // create action
//         create: {
//             reducer(state, { payload }) {
//                 const { setTheme } = payload
//                 state.push(setTheme)
//             },
//             prepare(setTheme) {
//                 return {
//                     payload: setTheme,
//                 }
//             }
//         }
//     }
// })
// const { actions, reducer } = countrySlice
// export const { create } = actions
// export default reducer