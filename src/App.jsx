/** @format */

import { useState, useEffect, Component } from "react";
import Header from "./Components/Header";

import axios from "axios";

function App() {
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
    <div className="App">
      <Header />
      Posts:
      {data.map((post) => {
        return <p key={post.id}>Title: {post.title}</p>;
      })}
    </div>
  );
}

export default App;

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
