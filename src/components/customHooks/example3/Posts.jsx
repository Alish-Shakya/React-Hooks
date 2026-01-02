import React from "react";
import useFetch from "./useFetch";

const Posts = () => {
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://dummyjson.com/comments");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts List</h2>
      <ul>
        {posts.comments.slice(0, 10).map((p) => (
          <li key={p.id}>{p.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
