import React from "react";
import useChangeTitle from "../../hooks/useChangeTitle";

const Blogs = () => {
  useChangeTitle("Blogs");
  return (
    <div>
      <h1>Hello form blogs</h1>
    </div>
  );
};

export default Blogs;
