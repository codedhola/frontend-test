import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  return (
    <div>
      <h1>BlogDetails</h1>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Invalid Parameter provided</h1>}
      {data && <p>{data.body}</p>}
    </div>
  );
};

export default BlogDetails;
