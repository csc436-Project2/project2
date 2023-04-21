/** @format */
import React, { useState, useEffect } from "react";
import axios from "axios";
const CRUD = () => {
  const [formData, setFormData] = useState({
    title: "",
    id: "",
    content: "",
  });

  const [editId, setEditId] = useState();

  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const { title, id, content } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //create
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && id && content) {
      axios
        .post("http://localhost:3001/v1/api/posts", formData)
        .then((res) => {
          setData([...data, res.data]);
          setFormData({ title: "", id: "", content: "" });
        })
        .catch((err) => console.log(err));
    }
  };

  // const [formData, setFormData] = useState({
  //   title: "",
  //   id: "",
  //   content: "",
  // });

  //update
  const handleUpdate = () => {
    if (title && id && content) {
      axios
        .patch(`http://localhost:3001/v1/api/posts/${editId}`, formData)
        .then((res) => {
          console.log(res);
          setFormData({ title: "", id: "", content: "" });
          setRefresh(refresh + 1);
        })
        .catch((err) => console.log(err));
    }
  };

  //delete
  const handleDelete = (deletedId) => {
    axios
      .delete(`http://localhost:3001/v1/api/posts/${deletedId}`, {
        params: title,
      })
      .then((res) => {
        console.log("DELETE RECORD:::::::::", res.data);
      })
      .catch((err) => console.log(err));
  };

  
  const handleEdit = (editIDNotState) => {
    axios
      .get(`http://localhost:3001/v1/api/posts/${editIDNotState}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/v1/api/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 mt-2'>
          <h4>Using CRUD operations and Axios in React JS</h4>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                className='form-control'
                id='title'
                placeholder='Enter Title Here'
                name='title'
                value={title}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='id'>Id</label>
              <input
                type='text'
                className='form-control'
                id='id'
                placeholder='Enter ID Here'
                name='id'
                value={id}
                onChange={handleChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='content'>Content</label>
              <input
                type='text'
                className='form-control'
                id='content'
                placeholder='Enter Content Here'
                name='content'
                value={content}
                onChange={handleChange}
              />
            </div>

            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
            <button
              type="button"
              className='btn btn-primary'
              onClick={() => {
                setEditId(formData.id);
                handleUpdate();
                
              }}
            >
              Update
            </button>
          </form>

          <hr />

          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Id</th>
                <th>Content</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((post, index) => (
                <tr key={index}>
                  <td>{post.title}</td>
                  <td>{post.id}</td>
                  <td>{post.content}</td>
                  <td>
                    <button
                      className='btn btn-warning'
                      onClick={() => {
                        handleEdit(post.id);
                        setEditId(post.id);
                      }}
                    >
                      Edit
                    </button>{" "}
                    <button
                      className='btn btn-warning'
                      onClick={() => {
                        handleDelete(post.id);
                        setEditId(post.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CRUD;
