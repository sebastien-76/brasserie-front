import React, { useState } from "react";
import { Link } from "react-router";
import menuBurger from "../../assets/icones/menu-burger.png";

export const NavBar = () => {
  const [ouvert, setOuvert] = useState(false);

  const handleOuvert = () => {
    setOuvert(!ouvert);
  };

  return (
    <nav className={`nav_bar  ${ouvert ? "voir_menu" : "cacher_menu"}`}>
      <button className="burger_bouton" onClick={handleOuvert}>
        <span>{<img src={menuBurger} alt="icone de menu burger" />}</span>
      </button>
      <ul className="nav_liste">
        <li>
          <Link to="/" className="nav_lien">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/produit" className="nav_lien">
            Produits
          </Link>
        </li>
        <li>
          <Link to="#" className="nav_lien">
            Services
          </Link>
        </li>
        <li>
          <Link to="#" className="nav_lien">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
