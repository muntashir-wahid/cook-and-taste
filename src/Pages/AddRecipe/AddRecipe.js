import React from "react";
import useChangeTitle from "../../hooks/useChangeTitle";

const AddRecipe = () => {
  useChangeTitle("Add Recipe");
  return (
    <div>
      <h1>Your can add a new recipe</h1>
    </div>
  );
};

export default AddRecipe;
