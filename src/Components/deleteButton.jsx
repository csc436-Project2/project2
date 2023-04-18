/** @format */
import axios from "axios";


     

const DeleteButton = ({ data }) => {
  const posts = data.filter((item) => item.id !== id);
  function deleteRow(id, e) {
    axios.delete(`http://localhost:3001/v1/api/posts/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
      setData(request.data);
    });
    return (
      <button className='deleteButton' onClick={deleteRow(posts.id, e)}>
        Delete
      </button>
    );
  }
};

export default DeleteButton;
