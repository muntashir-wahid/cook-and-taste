import React, { Fragment } from "react";
import About from "../../components/About/About";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

const Home = () => {
  return (
    <Fragment>
      <HeroBanner />
      <About />
    </Fragment>
  );
};

export default Home;
