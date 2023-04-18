/** @format */
import axios from "axios";

const DeleteButton = ({ data }) => {
  function deleteRow(id, e) {
    axios.delete("http://localhost:3001/v1/api/posts/${id}").then((res) => {
      console.log(res);
      console.log(res.data);

      const posts = data.filter((item) => item.id !== id);
      setData(request.data);
    });
    return (
      <button className='deleteButton' onClick={(e) => deleteRow(posts.id, e)}>
        Delete
      </button>
    );
  }
};

export default DeleteButton;
