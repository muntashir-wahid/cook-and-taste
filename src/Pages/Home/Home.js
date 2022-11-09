import React, { Fragment } from "react";
import About from "../../components/About/About";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Recipes from "../../components/Recipes/Recipes";
import useChangeTitle from "../../hooks/useChangeTitle";

const Home = () => {
  useChangeTitle("Home");
  return (
    <Fragment>
      <HeroBanner />
      <About />
      <Recipes />
    </Fragment>
  );
};

export default Home;
