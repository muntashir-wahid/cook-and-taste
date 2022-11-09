import React, { Fragment } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Review = ({ reviewData }) => {
  const { reviewer, ratings, reviewTime, review } = reviewData;
  const reviewDate = new Date(reviewTime).toLocaleDateString("en-US");

  return (
    <Fragment>
      <div className="bg-base-300 rounded-box px-4 py-6 space-y-5">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={reviewer.photoURL} alt={reviewer.name} />
            </div>
          </div>
          <h4 className="text-lg font-semibold">{reviewer.name}</h4>
        </div>
        <div className="flex  justify-start flex-col md:flex-row md:items-center gap-2">
          {ratings ? (
            <div className="flex gap-1 text-amber-400 font-semibold items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <span className="text-black">({ratings})</span>
            </div>
          ) : (
            <p>No Ratings</p>
          )}

          <p className="text-sm">{reviewDate}</p>
        </div>
        <p className="text-lg font-medium">{review}</p>
      </div>
      <div className="divider"></div>
    </Fragment>
  );
};

export default Review;
