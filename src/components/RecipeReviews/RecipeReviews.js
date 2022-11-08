import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import NewReview from "./NewReview";
import SendUserToLogin from "./SendUserToLogin";

const RecipeReviews = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-16">
      <h3 className="text-4xl font-semibold mb-8">Reviews</h3>
      <div className="bg-base-200 p-4 rounded-lg max-w-xl flex justify-center">
        {user ? <NewReview /> : <SendUserToLogin />}
      </div>
    </div>
  );
};

export default RecipeReviews;
