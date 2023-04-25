/** @format */

/** @format */

import { createStore } from "redux";

const initialState = {
  data: [],
};

function blogReducer(state = initialState, action) {
  switch (action.type) {
    case "create":
    case "read":
    case "update":
    case "delete":
      return {
        ...state,
        [action.type]: action.value,
      };
    case "create":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "read":
      return {
        //pass data to payload
        ...state,
        data: action.payload,
      };
    case "update":
      const updatedData = state.data.map((post) => {
        if (post.id === action.payload.updatedData) {
          return action.payload;
        } else {
          return post;
        }
      });

      return {
        ...state,
        data: updatedData,
      };
    case "delete":
      // when firing the action, need to send id from post here
      const filteredData = data.filter((post) => action.id !== post.id);
      return {
        ...state,
        data: filteredData,
      };
  }

  return state;
}
export const Store = createStore(blogReducer);

export { blogReducer };
//to tell our project about store,
//add the following to some file in the project

// //import { Provider } from "react-redux";
// //import { store } from "./store";
// import { configureStore } from "@reduxjs/toolkit";
// import blogsReducer from "./features/todos/blogSlice";
// import
// const store = configureStore({
//   reducer: {
//     blogs: blogsReducer,
//   },
// });

// export default store;
