import React, { Fragment } from "react";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
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
      <Contact />
    </Fragment>
  );
};

export default Home;
