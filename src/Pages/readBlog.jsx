/** @format */
import {
  Routes,
  Route,
  Link,
  Outlet,
  NavLink as RouterLink,
} from "react-router-dom";

const ReadBlog = ({ titles }) => {
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
