import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleDelete(id) {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlog);
  }

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then((data) => {
        setBlog(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="content">
      {isLoading && <h1>Loading...</h1>}
      {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}
      {/* {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <BlogList blogs={blogs} handleDelete={handleDelete} />
      )} */}
    </div>
  );
};
export default Home;
