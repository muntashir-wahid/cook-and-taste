import React, { useEffect, useState } from "react";
import RecipeCard from "../UI/RecipeCard/RecipeCard";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/recipes?limit=3")
      .then((res) => res.json())
      .then(({ data }) => {
        setRecipes(data.recipes);
      });
  }, []);

  return (
    <section className="p-16">
      <h2 className="text-4xl font-semibold text-center mb-8">All Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline btn-primary">All Recipes</button>
      </div>
    </section>
  );
};

export default Recipes;
