import React from "react";

const RecipeCard = ({ recipe }) => {
  const { _id, name, description, picture, ratings, price } = recipe;

  return (
    <article className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img style={{ minHeight: "16rem" }} src={picture} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View details</button>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
