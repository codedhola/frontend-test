import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="content">
      {!isError ? null : <h1>An Error Occured</h1>}
      {isLoading && <h1>Loading...</h1>}
      {blogs && <BlogList blogs={blogs} />}
      {/* {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <BlogList blogs={blogs} handleDelete={handleDelete} />
      )} */}
    </div>
  );
};
export default Home;
