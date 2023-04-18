/** @format */
import { Routes, Route, Link, Outlet, NavLink } from "react-router-dom";
import "./Header.css";

const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <>
      <h1>Brian and Chris Blog Site</h1>

      <nav>
        <NavLink className="ul li li-a li-a:hover" to='/homePage' style={style}>
          Home
        </NavLink>
        <NavLink className="ul li li-a li-a:hover" to='/createBlog' style={style}>
          Create Blog
        </NavLink>
        <NavLink className="ul li li-a li-a:hover" to='/deleteBlog' style={style}>
          Delete Blog
        </NavLink>
        <NavLink className="ul li li-a li-a:hover" to='/readBlog' style={style}>
          Read Blog
        </NavLink>
        <NavLink className="ul li li-a li-a:hover" to='/updateBlog' style={style}>
          Update Blog
        </NavLink>
      </nav>

      <main style={{ padding: "1rem 0" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
