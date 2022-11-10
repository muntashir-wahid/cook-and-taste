import React from "react";
import { Link } from "react-router-dom";
import useChangeTitle from "../../hooks/useChangeTitle";

const ErrorPage = () => {
  useChangeTitle("Page not found");
  return (
    <div className="min-h-screen p-6 md:p-10 lg:p-16 flex justify-center items-center">
      <div>
        <h3 className="text-4xl text-center text-red-500 mb-5">
          Something went wrong
        </h3>
        <div className="flex justify-center">
          <Link to="/">
            <button className="btn btn-warning">Go back Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
