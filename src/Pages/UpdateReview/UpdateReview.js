import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useChangeTitle from "../../hooks/useChangeTitle";

const UpdateReview = () => {
  useChangeTitle("Update Review");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { data } = useLoaderData();
  const { _id, recipeName, ratings, review } = data.review;

  const reviewUpdateFormHandler = (event) => {
    event.preventDefault();
    const reviewForm = event.target;

    const review = reviewForm.review.value;
    const ratings = reviewForm.ratings.value;

    const updatedReview = {
      review,
      ratings,
    };

    fetch(`http://localhost:5000/api/v1/reviews/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        if (data.result.modifiedCount) {
          navigate(`/my-reviews/${user?.uid}`);
        }
      });
  };

  return (
    <div className="min-h-screen px-4 w-full">
      <h2 className="text-center text-4xl mt-10 font-semibold">Please Login</h2>
      <div className="max-w-md my-6 mx-auto p-6 shadow-2xl rounded-xl">
        <form onSubmit={reviewUpdateFormHandler} className="p-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Reviewed Recipe</span>
            </label>
            <input
              type="text"
              name="reviewedRecipe"
              placeholder="Reviewed recipe"
              className="input input-bordered"
              defaultValue={recipeName}
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <input
              type="number"
              name="ratings"
              max="5"
              min="0"
              step=".1"
              placeholder="ratings"
              className="input input-bordered"
              defaultValue={ratings}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Review</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Your review"
              name="review"
              defaultValue={review}
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
