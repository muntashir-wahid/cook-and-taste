import React from "react";

const RecipeCardWrapper = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 mb-10">
      {children}
    </div>
  );
};

export default RecipeCardWrapper;
