import React from "react";
import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
  const { data } = useLoaderData();
  console.log(data);

  return <section className="p-16"></section>;
};

export default RecipeDetails;
