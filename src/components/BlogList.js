import React from "react";

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <h2>{blog.title}</h2>
      ))}
    </div>
  );
};

export default BlogList;
