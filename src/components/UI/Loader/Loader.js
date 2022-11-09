import React from "react";

const Loader = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <progress className="progress w-56"></progress>.
    </div>
  );
};

export default Loader;
