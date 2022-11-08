import React, { Fragment } from "react";

const Review = ({ reviewData }) => {
  const { review } = reviewData;
  return (
    <Fragment>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        <p>{review}</p>
      </div>
      <div className="divider"></div>
    </Fragment>
  );
};

export default Review;
