import React from "react";

const RecipeDetailsHeader = ({ imgUrl }) => {
  const headerStyle = {
    backgroundImage: `url(${imgUrl})`,
    minHeight: "25rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    bakcgroundPosition: "center center",
  };

  return (
    <header className="hero mb-6" style={headerStyle}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content"></div>
    </header>
  );
};

export default RecipeDetailsHeader;
