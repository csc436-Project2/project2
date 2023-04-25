/** @format */

import { describe, it, expect } from "vitest";
// import CRUD, {
//   handleUpdate,
//   handleChange,
//   handleEdit,
//   handleDelete,
// } from "./src/store";
// import { blogReducer } from "./src/store.js";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// import App, { getPosts } from "./src/App";
import { blogReducer } from "../store";

const blogOne = {
  title: "Blog Post #1",
  id: "1",
  content: "Blog Body Content #1",
};
const blogTwo = {
  title: "Blog Post #2",
  id: "2",
  content: "Blog Body Content #2",
};

const blogs = [blogOne, blogTwo];

// describe("blogReducer", () => {
//   it("adds an item to the array", () => {
//     const action = { type: "create", payload: blogOne };
//     const state = { data: [], isLoading: false, isError: false };

//     const newState = blogReducer(state, action);
//     const expectedState = {
//       data: [blogOne],
//       isLoading: false,
//       isError: false,
//     };

//     expect(newState).toBe(expectedState);
//   });
// });

describe("Something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("handleUpdate component", () => {
  it("updates a blog when clicking the updateButton", () => {});
});

describe("handleChange component", () => {
  it("updates a blog when clicking the updateButton", () => {});
});

describe("handleSubmit component", () => {
  it("Adds a blog when clicking the submitButton", () => {
    const action = { type: "submit", payload: blogOne };
    const state = { data: [blogOne], isLoading: false, isError: false };

    const newState = blogReducer(state, action);
    const expectedState = {
      data: [blogOne],
      isLoading: false,
      isError: false,
    };

    expect(newState).toEqual(expectedState);
  });
});

describe("handleEdit component", () => {
  it("updates a blog when clicking the updateButton", () => {});
});
describe("handleDelete component", () => {
  it("updates a blog when clicking the updateButton", () => {
    const action = { type: "update", payload: blogOne };
    const state = {
      data: [blogOne],
      isLoading: false,
      isError: false,
    };

    const newState = blogReducer(state, action);
    const expectedState = {
      data: [blogOne],
      isLoading: false,
      isError: false,
    };

    expect(newState).toEqual(expectedState);
  });
});
