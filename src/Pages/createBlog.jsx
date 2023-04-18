/** @format */
import React from "react";
import CRUD from "./CRUD";
const CreateBlog = () => {
  return (
    <div>
      <CRUD />
      {/* <>
        <main style={{ padding: "1rem 0" }}>
          <h2>Create Blog Page</h2>
          <label>Blog To Create: </label>

          <input
            name='CreateBlogTitle'
            type='text'
            placeHolder='Your Title Here'
          />
          <input
            name='CreateBlogBody'
            type='text'
            placeHolder='Blog Body Here'
          />
        </main>
      </> */}
    </div>
  );
};

export default CreateBlog;
