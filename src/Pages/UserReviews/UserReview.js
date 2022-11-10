import React from "react";
import { Link } from "react-router-dom";

const UserReview = ({ reviewData, onDeleteReview }) => {
  const { recipeName, review, ratings, _id } = reviewData;

  const deleteReviewHandler = (reviewId) => {
    fetch(
      `https://cook-and-taste-server.vercel.app/api/v1/reviews/${reviewId}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then(({ data }) => {
        const isDeleted = data.result.deletedCount;
        if (isDeleted) {
          onDeleteReview(reviewId);
        }
      });
  };

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
          <Link to={`/update-review/${_id}`}>
            <button className="btn btn-primary">Update review</button>
          </Link>
          <button
            onClick={deleteReviewHandler.bind(null, _id)}
            className="btn btn-ghost"
          >
            delete review
          </button>
        </div>
      </div>
    </article>
  );
};

export default UserReview;
