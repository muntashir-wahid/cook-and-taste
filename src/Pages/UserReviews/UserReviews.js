import React from "react";
import useChangeTitle from "../../hooks/useChangeTitle";

const UserReviews = () => {
  useChangeTitle("My Reviews");
  return (
    <div>
      <h1>All your reviews are here</h1>
    </div>
  );
};

export default UserReviews;
