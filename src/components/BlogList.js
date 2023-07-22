import React from "react";

const BlogList = ({ blogs, handleDelete }) => {
  return (
    <div>
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>Author: {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)} className="del">
            del
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
