import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const navLink = [
    { id: 1, content: "Home", link: "/home" },
    { id: 2, content: "Recipes", link: "/recipes" },
    { id: 3, content: "blogs", link: "/blogs" },
  ];

  return (
    <Fragment>
      {navLink.map((link) => (
        <li key={link.id}>
          <NavLink to={link.link}>{link.content}</NavLink>
        </li>
      ))}
    </Fragment>
  );
};

export default NavLinks;
