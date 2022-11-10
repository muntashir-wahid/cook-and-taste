import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../../components/UI/RecipeCard/RecipeCard";
import RecipeCardWrapper from "../../components/UI/RecipeCard/RecipeCardWrapper";
import useChangeTitle from "../../hooks/useChangeTitle";

const AllRecipes = () => {
  useChangeTitle("All Recipes");
  const { data } = useLoaderData();
  console.log(data);

  return (
    <section className="p-16">
      <h2 className="text-4xl font-semibold text-center mb-8">
        Weclome to All Recipes page
      </h2>
      <RecipeCardWrapper>
        {data.recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </RecipeCardWrapper>
    </section>
  );
};

export default AllRecipes;
