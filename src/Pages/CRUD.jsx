/** @format */
import React, { useState, useEffect } from "react";

const CRUD = () => {
  const [formData, setFormData] = useState({
    title: "",
    id: "",
    content: "",
  });

  const [data, setData] = useState([]);

  const { title, id, content } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && id && content) {
      setData([...data, formData]);
      setFormData({ title: "", id: "", content: "" });
    }
  };

  const handleDelete = (index) => {
    const newData = data.filter((item, i) => i !== index);
    setData(newData);
  };

  const handleEdit = (index) => {
    const itemToEdit = data[index];
    setFormData(itemToEdit);
    handleDelete(index);
  };

  useEffect(() => {
    console.log("Data", data);
  }, [data]);

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
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.id}</td>
                  <td>{item.content}</td>
                  <td>
                    <button
                      className='btn btn-warning'
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>{" "}
                    <button
                      className='btn btn-warning'
                      onClick={() => handleDelete(index)}
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
