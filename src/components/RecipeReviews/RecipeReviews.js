import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import NewReview from "./NewReview";
import SendUserToLogin from "./SendUserToLogin";

const RecipeReviews = ({ recipeId }) => {
  const { user } = useContext(AuthContext);
  const [repiceReviews, setRecipeReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/reviews/${recipeId}`)
      .then((res) => res.json())
      .then(({ data }) => {
        console.log(data);
      });
  }, [recipeId]);

  const newAddedReviewHandler = (customerReview) => {
    setRecipeReviews((prevReviews) => {
      const updatedReviews = [customerReview, ...prevReviews];
      return updatedReviews;
    });
  };

  return (
    <div className="p-16">
      <h3 className="text-4xl font-semibold mb-8">Reviews</h3>
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
    </div>
  );
};

export default RecipeReviews;
