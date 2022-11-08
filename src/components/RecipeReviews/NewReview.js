import React from "react";

const NewReview = () => {
  const reviewFormSubmitHandler = (event) => {
    event.preventDefault();
    const reviewForm = event.target;
    const reviewerName = reviewForm.reviewerName.value;
    const review = reviewForm.review.value;
    const ratings = reviewForm.ratings.value;
    console.log(reviewerName, review, ratings);
  };

  return (
    <form
      onSubmit={reviewFormSubmitHandler}
      className="p-4 bg-white w-full md:w-3/4 flex flex-col items-center rounded-lg space-y-4"
    >
      <input
        type="text"
        name="reviewerName"
        placeholder="Your Name"
        className="input input-bordered w-full "
      />
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="Your review"
        name="review"
      ></textarea>
      <div className="rating">
        <input
          type="radio"
          name="ratings"
          className="mask mask-star-2 bg-orange-400"
          defaultValue="1"
        />
        <input
          type="radio"
          name="ratings"
          className="mask mask-star-2 bg-orange-400"
          defaultValue="2"
        />
        <input
          type="radio"
          name="ratings"
          className="mask mask-star-2 bg-orange-400"
          defaultValue="3"
        />
        <input
          type="radio"
          name="ratings"
          className="mask mask-star-2 bg-orange-400"
          defaultValue="4"
        />
        <input
          type="radio"
          name="ratings"
          className="mask mask-star-2 bg-orange-400"
          defaultValue="5"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default NewReview;
