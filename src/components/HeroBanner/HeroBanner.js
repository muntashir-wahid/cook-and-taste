import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  const background = {
    backgroundImage: `url("https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80")`,
  };

  return (
    <section className="hero min-h-screen" style={background}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/recipes">
            <button className="btn btn-primary">All Recipes</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
