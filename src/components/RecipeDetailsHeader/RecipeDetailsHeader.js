import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeDetailsHeader = ({ imgUrl }) => {
  const headerStyle = {
    backgroundImage: `url(${imgUrl})`,
    minHeight: "25rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    bakcgroundPosition: "center center",
  };

  const orderConfirmHandler = () => {
    toast.success("Your food will be on your doorstep soon. Enjoy the food.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <header className="hero mb-6" style={headerStyle}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <button onClick={orderConfirmHandler} className="btn btn-primary">
          Place an Order
        </button>
      </div>
      <ToastContainer />
    </header>
  );
};

export default RecipeDetailsHeader;
