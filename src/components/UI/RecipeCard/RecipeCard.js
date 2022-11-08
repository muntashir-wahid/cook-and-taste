import React from "react";
import { FaDollarSign, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { _id, name, description, picture, ratings, price } = recipe;

  return (
    <article className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img style={{ minHeight: "16rem" }} src={picture} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="mb-5">
          {description.length > 100 ? (
            <p>{description.slice(0, 100)}...</p>
          ) : (
            <p>{description}</p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-6">
          <div className="flex items-center">
            <span className="font-semibold text-lg">Price:</span>
            <FaDollarSign />
            <span className="font-semibold text-lg">{price}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1 text-amber-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <p className="font-medium">{ratings} Stars Average</p>
          </div>
        </div>
        <div className="card-actions justify-center sm:justify-end">
          <Link to={`/recipes/${_id}`}>
            <button className="btn btn-primary">View details</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
