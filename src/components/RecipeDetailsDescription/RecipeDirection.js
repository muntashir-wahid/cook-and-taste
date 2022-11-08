import React from "react";

const RecipeDirection = ({ direction, index }) => {
  return (
    <li>
      <span className="text-xl font-medium mb-4">Step: {index + 1}</span>
      <p className="text-lg">{direction}</p>
    </li>
  );
};

export default RecipeDirection;
