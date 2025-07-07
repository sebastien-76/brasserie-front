import React from "react";
import { Link } from "react-router";
import "./Menu.css";
import { NavBar } from "./NavBar";
import logo from "../../assets/images/logo.png";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">
        <Link to="/" className="navLien">
          <img src={logo} alt="logo brasserie l'Artésienne" />
        </Link>
      </div>
      <NavBar />
    </div>
  );
};
