/** @format */
import './components/Header.css';
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header.jsx";
import CreateBlog from "./Pages/createBlog.jsx";
import DeleteBlog from "./Pages/deleteBlog.jsx";
import ReadBlog from "./Pages/readBlog.jsx";
import UpdateBlog from "./Pages/updateBlog.jsx";
import HomePage from "./Pages/HomePage.jsx";
import PageRoutes from "./components/Routes.jsx";
import DeleteButton from "./components/deleteButton.jsx";
import {
  useNavigate,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
  useParams,
} from "react-router-dom";

function App() {
  const deleteRow = (id) => (e) => {
    console.log("id", id);
    console.log("Event", e);
    axios.delete("http://localhost:3001/v1/api/posts/${id}").then((res) => {
      console.log(res);
      console.log(res.data);

      const posts = data.filter((item) => item.id !== id);
      setData(request.data);
    });
    // return (
    // <button className='deleteButton' onClick={(e) => deleteRow(posts.id, e)}>
    //   Delete
    // </button>
    //);
  };
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const getPosts = async () => {
    setLoading(true);
    const request = await axios.get("http://localhost:3001/v1/api/posts");

    setLoading(false);
    setData(request.data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(data);
  return (
    <div className='App'>
      <PageRoutes data={data} />
      {data.map((post) => {
        return (
          <div key={post.id}>
            Title: {post.title} | Last Updated: {post.last_updated} | Published
            Date: {post.originally_published}
          </div>
        );
      })}
    </div>
  );

  // const [blogTitles, setBlogTitles] = useState(titles);

  // const handleRemoveBlog = (titleID) => {
  //   setBlogTitles((state) => state.filter((title) => title.id !== titleID));

  //   navigate("/homePage");
  // };
  
  return <PageRoutes titles={titles} onRemoveItem={handleRemoveBlog} />;

}

export default App;

// const [loading, setLoading] = useState(false);
// const [data, setData] = useState([]);
// const getPosts = async () => {
//   setLoading(true);
//   const request = await axios.get("http://localhost:3001/v1/api/posts");

//   setLoading(false);
//   setData(request.data);
// };
// useEffect(() => {
//   getPosts();
// }, []);

// if (loading) {
//   return <p>Loading...</p>;
// }
// console.log(data);
// return (
//   <div className='App'>
//     Posts:
//     {data.map((post) => {
//       return <p key={post.id}>Title: {post.title}</p>;
//     })}
//   </div>
// );

// const Layout = () => {
//   const style = ({ isActive }) => ({
//     fontWeight: isActive ? "bold" : "normal",
//   });
