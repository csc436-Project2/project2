/** @format */
import { Routes, Route, Link, Outlet, NavLink } from "react-router-dom";
import Layout from "./Layout.jsx";
import CreateBlog from "../Pages/createBlog.jsx";
import DeleteBlog from "../Pages/deleteBlog.jsx";
import ReadBlog from "../Pages/readBlog.jsx";
import UpdateBlog from "../Pages/updateBlog.jsx";

import HomePage from "../Pages/homePage.jsx";

const PageRoutes = ({ titles }) => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<homePage />} />
        <Route path='/homePage' element={<HomePage />} />
        <Route path='/CreateBlog' element={<CreateBlog />} />
        <Route path='/DeleteBlog' element={<DeleteBlog titles={titles} />} />
        <Route path='/ReadBlog' element={<ReadBlog titles={titles} />}>
          <Route path=':titleId' element={<ReadBlog />} />
        </Route>
        <Route path='/UpdateBlog' element={<UpdateBlog titles={titles} />} />

        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

export default PageRoutes;
