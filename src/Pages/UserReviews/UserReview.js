import React from "react";

const UserReview = ({ reviewData }) => {
  const { recipeName, review, ratings } = reviewData;

  return (
    <article className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <p>Your Review on</p>
        <h2 className="card-title">
          {recipeName ? recipeName : "No Recipe name available"}
        </h2>
        <p>{review}</p>
        <div className="text-lg font-medium">
          {ratings ? <p>{ratings} Ratings</p> : <p>No Ratings</p>}
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Update review</button>
          <button className="btn btn-ghost">delete review</button>
        </div>
      </div>
    </article>
  );
};

export default UserReview;
