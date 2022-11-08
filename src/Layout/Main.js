import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      <main className="max-w-7xl mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Main;
