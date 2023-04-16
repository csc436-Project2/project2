/** @format */
import { Routes, Route, Link, Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <>
      <h1>Create Your Blog Here!!!</h1>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to='/homePage' style={style}>
          Home
        </NavLink>{" "}
        |
        <NavLink to='/createBlog' style={style}>
          Create Blog
        </NavLink>{" "}
        |
        <NavLink to='/deleteBlog' style={style}>
          Delete Blog
        </NavLink>{" "}
        |
        <NavLink to='/readBlog' style={style}>
          Read Blog
        </NavLink>{" "}
        |
        <NavLink to='/updateBlog' style={style}>
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
