import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeDetailsDescription from "../../components/RecipeDetailsDescription/RecipeDetailsDescription";
import RecipeDetailsHeader from "../../components/RecipeDetailsHeader/RecipeDetailsHeader";
import RecipeReviews from "../../components/RecipeReviews/RecipeReviews";

const RecipeDetails = () => {
  const { data } = useLoaderData();
  const { picture, _id } = data.recipe;

  return (
    <section>
      <RecipeDetailsHeader imgUrl={picture} />
      <RecipeDetailsDescription recipe={data.recipe} />
      <RecipeReviews recipeId={_id} />
    </section>
  );
};

export default RecipeDetails;
