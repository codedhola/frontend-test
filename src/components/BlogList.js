import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            {/* <p>{blog.body}</p> */}
            <p>Author: {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
