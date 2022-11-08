import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Fragment>
      <header>
        <h1>This will be the navbar</h1>
      </header>
      <Outlet />
      <h1>This will be the footer</h1>
    </Fragment>
  );
};

export default Main;
