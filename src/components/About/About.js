import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const imgUrl =
    "https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80";

  return (
    <section
      className="hero min-h-screen p-6 md:p-10 lg:p-16"
      style={{ minHeight: "35rem" }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <img src={imgUrl} className="rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Hello I'm Maria Noor</h1>
          <p className="py-6">
            I'm a professional chef at the hotel Sheraton Int. Cook and Taste is
            my own company. Here I provide some delicious recipes. You can try
            it at home. You also can order food from here.
          </p>
          <Link to="/recipes">
            <button className="btn btn-primary">See all Recipes</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
