/** @format */

import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/todosSlice";
// import filtersReducer from "./features/filters/filtersSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    // filters: filtersReducer,
  },
});

// import {createStore} from "redux"

// const initialState = {
//     amount: "12.00",
//     currencyCode: "USD",
// };

// function reducer(state = initialState, action){
//     return state;
// }

// export const store = createStore(reducer);

//to tell our project about store,
//add the following to some file in the project

// import { Provider } from "react-redux";
// import {store} from "./store"
