import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import RecipeDirection from "./RecipeDirection";
import RecipeIngredients from "./RecipeIngredients";

const RecipeDetailsDescription = ({ recipe }) => {
  const { name, ratings, ingredients, directions, description } = recipe;

  return (
    <div className="p-6 md:p-10 lg:p-16 space-y-6">
      <h2 className="text-6xl font-semibold">{name}</h2>
      <div className="flex gap-2 items-center">
        <div className="text-xl text-amber-400 flex gap-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <p className="text-xl font-bold">
          {ratings} <span className="text-lg font-medium">(Average)</span>
        </p>
      </div>
      <div>
        <p className="text-lg font-medium">{description}</p>
      </div>
      <div>
        <h3 className="text-4xl font-semibold mb-6">Ingredients</h3>
        <ul className="list-disc list-inside space-y-2">
          {ingredients.map((ingredient, index) => (
            <RecipeIngredients key={index} ingredient={ingredient} />
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-4xl font-semibold mb-6">Directions</h3>
        <ul className="list-inside space-y-4">
          {directions.map((direction, index) => (
            <RecipeDirection key={index} direction={direction} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetailsDescription;
