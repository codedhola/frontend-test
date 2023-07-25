import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log("An error occured while deleting");
      });
  };

  return (
    <div>
      <h1>BlogDetails</h1>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Invalid Parameter provided</h1>}
      {data && (
        <div>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
          <code>{data.author}</code>
          <button onClick={handleDelete}>delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
