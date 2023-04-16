/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header.jsx";
import CreateBlog from "./Pages/createBlog.jsx";
import DeleteBlog from "./Pages/deleteBlog.jsx";
import ReadBlog from "./Pages/readBlog.jsx";
import UpdateBlog from "./Pages/updateBlog.jsx";
import { Routes, Route, Link } from "react-router-dom";

function App() {
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

  return (
    <div className='App'>
      <Header />
      <CreateBlog />
      <DeleteBlog />
      <ReadBlog />
      <UpdateBlog />
      <br></br>
      <p>
        <Link to='/createBlog'>Create Blog</Link> |
        <Link to='/readBlog'>Read Blog</Link>
        {ReadBlog} |<Link to='/updateBlog'>Update Blog</Link>
        {UpdateBlog} |<Link to='/deleteBlog'>Delete Blog</Link>
        {UpdateBlog}
      </p>
      <Routes>
        <Route path='/welcomePage'>Welcome</Route>
        <Route path='/createBlog' element={<CreateBlog />} />
        <Route path='/readBlog' element={<ReadBlog />} />
        <Route path='/updateBlog' element={<UpdateBlog />} />
        <Route path='/deleteBlog' element={<DeleteBlog />} />
      </Routes>

      {/* <pre>{JSON.stringify(userData, 0, 1)}</pre> */}
    </div>
  );
}

export default App;

// import { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

// import './App.css';
// import LoginForm from './components/LoginForm';
// import RegisterForm from './components/RegisterForm';
// import WelcomePage from './components/WelcomePage';
// import { TOKEN_NAME } from './utils/constants';

// function App({ authenticated }) {
//   const [userData,] = useState(() => {
//     return localStorage.getItem(TOKEN_NAME);
//   })

//   return (
//     <div className="App">
//       <p>
//         <Link to="/register">Register</Link> | <Link to="/login">Login</Link>{' '}| <Link to="/welcome">Welcome</Link>{' '}
//       </p>
//       <Routes>
//         <Route path="/login" element={<LoginForm />} />
//         <Route path="/register" element={<RegisterForm />} />
//         <Route
//           path="/welcome"
//           element={<WelcomePage />} authenticated={authenticated} />

//       </Routes>

//       <pre>{JSON.stringify(userData, 0, 1)}</pre>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <h1>
//         <b>HELLO! WELCOME TO OUR SITE!</b>
//       </h1>
//       <b></b>
//       <h1>CHRIS AND BRIAN</h1>
//       <div className="card">
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//     </div>
//   );
// }

// export default App;
