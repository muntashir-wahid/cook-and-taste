import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeDetailsHeader from "../../components/RecipeDetailsHeader/RecipeDetailsHeader";

const RecipeDetails = () => {
  const { data } = useLoaderData();
  const { picture } = data.recipe;

  return (
    <section>
      <RecipeDetailsHeader imgUrl={picture} />
    </section>
  );
};

export default RecipeDetails;
