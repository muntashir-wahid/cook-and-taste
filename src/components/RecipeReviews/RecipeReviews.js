import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import NewReview from "./NewReview";
import Review from "./Review";
import SendUserToLogin from "./SendUserToLogin";

const RecipeReviews = ({ recipeId }) => {
  const { user } = useContext(AuthContext);
  const [recipeReviews, setRecipeReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/reviews/${recipeId}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setRecipeReviews(data.recipeReviews);
      });
  }, [recipeId]);

  const newAddedReviewHandler = (customerReview) => {
    setRecipeReviews((prevReviews) => {
      const updatedReviews = [customerReview, ...prevReviews];
      return updatedReviews;
    });
  };

  return (
    <div className="p-16 space-y-8">
      <h3 className="text-4xl font-semibold">
        Reviews({recipeReviews.length})
      </h3>
      <div className="bg-base-200 p-4 rounded-lg max-w-xl flex justify-center">
        {user ? (
          <NewReview
            recipeId={recipeId}
            onAddedNewReview={newAddedReviewHandler}
          />
        ) : (
          <SendUserToLogin />
        )}
      </div>
      <div className="flex flex-col w-full md:w-3/5  lg:w-1/2">
        {recipeReviews.map((review) => (
          <Review key={review._id} reviewData={review} />
        ))}
      </div>
    </div>
  );
};

export default RecipeReviews;
