/** @format */

import { Routes, Route, Link, Outlet, NavLink } from "react-router-dom";

const DeleteBlog = ({ titles }) => {
  return (
    <>
      <h2>Titles</h2>

      <ul>
        {titles.map((title) => (
          <li key={title.id}>
            <Link to={`/titles/${title.id}`}>
              {title.title} | {title.description} | {title.timePublished}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

// const DeleteBlog = () => {
//   return (
//     <main style={{ padding: "1rem 0" }}>
//       <h2>Delete Blog Page</h2>
//       <label>Blog To Delete: </label>
//       <input name='delete' placeHolder='Title To Delete' />
//     </main>
//   );
// };

export default DeleteBlog;
