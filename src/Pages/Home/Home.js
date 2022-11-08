import React, { Fragment } from "react";
import About from "../../components/About/About";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Recipes from "../../components/Recipes/Recipes";

const Home = () => {
  return (
    <Fragment>
      <HeroBanner />
      <About />
      <Recipes />
    </Fragment>
  );
};

export default Home;
