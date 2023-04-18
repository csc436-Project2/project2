/** @format */
import "./Pages.css"
const HomePage = ({ data }) => {
  return (
    <div className='App'>
      <h1>Home Page</h1>
      Posts:
      {/* {data.map((post) => {
        return (
          <p key={post.id}>
            Title: {post.title} | Last Updated: {post.last_updated} | Published
            Date: {post.originally_published}
          </p>
        );
      })} */}
    </div>
  );
};

export default HomePage;
