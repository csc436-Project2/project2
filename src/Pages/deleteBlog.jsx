/** @format */

import {
  useParams,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
} from "react-router-dom";
import CRUD from "./CRUD";
const DeleteBlog = () => {
  // const { titleID } = useParams();
  return (
    <>
      <CRUD />
      {/* <h2>Title to Delete</h2>

      <ul>
        {data.map((title) => (
          <li key={title.id}>
            <Link to={`/titles/${title.id}`}>
              {title.title} | {title.description} | {title.timePublished}{" "}
              <button>delete</button>
            </Link>
          </li>
        ))}
      </ul> */}
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
