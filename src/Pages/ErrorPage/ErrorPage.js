import React from "react";
import useChangeTitle from "../../hooks/useChangeTitle";

const ErrorPage = () => {
  useChangeTitle("Page not found");
  return (
    <div>
      <h1>Hello from error page</h1>
    </div>
  );
};

export default ErrorPage;
