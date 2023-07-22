import React from "react";

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>Author: {blog.author}</p>
          <button className="del">del</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
