/** @format */

import {
  Routes,
  Route,
  Link,
  Outlet,
  NavLink as RouterLink,
} from "react-router-dom";

const UpdateBlog = ({ data }) => {
  return (
    <>
      <h1>Update Your Blog</h1>
      <h2>Titles</h2>

      <ul>
        {data.map((title) => (
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

// const UpdateBlog = () => {
//   return (
//     <main style={{ padding: "1rem 0" }}>
//       <h2>Update Blog Page</h2>
//       <label>Blog To Update: </label>
//       <input name='Update' placeHolder='Blog To Update' />
//     </main>
//   );
// };

export default UpdateBlog;
