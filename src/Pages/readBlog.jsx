/** @format */
import {
  Routes,
  Route,
  Link,
  Outlet,
  NavLink as RouterLink,
} from "react-router-dom";
import CRUD from "./CRUD";

const ReadBlog = ({ data }) => {
  return (
    <>
      <h2>Pick a Blog To Read</h2>
      <CRUD />

      {/* <ul>
        {data.map((title) => (
          <li key={title.id}>
            <Link to={`/titles/${title.id}`}>
              {title.title} | {title.description} | {title.timePublished}{" "}
            </Link>
          </li>
        ))}
      </ul> */}
    </>
  );
};

// const ReadBlog = () => {
//   return (
//     <main style={{ padding: "1rem 0" }}>
//       <h2>Read Blog Page</h2>
//       <label>Blog To Read: </label>
//       <input name='Read' placeHolder='Title of Blog To Read' />
//     </main>
//   );
// };

export default ReadBlog;
