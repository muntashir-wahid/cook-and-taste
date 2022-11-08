import React from "react";
import { Link } from "react-router-dom";

const SendUserToLogin = () => {
  return (
    <div className="p-4 bg-white w-3/4 flex flex-col items-center rounded-lg">
      <h4 className="text-xl font-semibold mb-5">
        Please login to add a review
      </h4>
      <Link to="/login">
        <button className="btn btn-outline btn-primary">Login</button>
      </Link>
    </div>
  );
};

export default SendUserToLogin;
