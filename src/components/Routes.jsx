/** @format */
import { Routes, Route, Link, Outlet, NavLink } from "react-router-dom";
import Layout from "./Layout.jsx";
import CreateBlog from "../Pages/createBlog.jsx";
import DeleteBlog from "../Pages/deleteBlog.jsx";
import ReadBlog from "../Pages/readBlog.jsx";
import UpdateBlog from "../Pages/updateBlog.jsx";

import HomePage from "../Pages/homePage.jsx";
import axios from "axios";

// componentDidMount() {
//     // GET request using fetch with error handling
//     fetch('https://api.npms.io/v2/invalid-url')
//         .then(async response => {
//             const data = await response.json();

//             // check for error response
//             if (!response.ok) {
//                 // get error message from body or default to response statusText
//                 const error = (data && data.message) || response.statusText;
//                 return Promise.reject(error);
//             }

//             this.setState({ totalReactPackages: data.total })
//         })
//         .catch(error => {
//             this.setState({ errorMessage: error.toString() });
//             console.error('There was an error!', error);
//         });
// }

const PageRoutes = ({ data }) => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<homePage />} />
        <Route path='/homePage' element={<HomePage data={data} />} />
        <Route path='/CreateBlog' element={<CreateBlog />} />
        <Route path='/DeleteBlog' element={<DeleteBlog data={data} />}>
          <Route path=':titleID' element={<DeleteBlog />} />
        </Route>
        <Route path='/ReadBlog' element={<ReadBlog data={data} />}>
          <Route path=':titleId' element={<ReadBlog />} />
        </Route>
        <Route path='/UpdateBlog' element={<UpdateBlog data={data} />} />

        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

export default PageRoutes;
