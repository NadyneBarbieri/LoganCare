import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav>
      <div className="burguer">
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`burger-bar ${isMenuOpen ? "clicked" : "unclicked"}`} />
        <div className={`burger-bar ${isMenuOpen ? "clicked" : "unclicked"}`} />
        <div className={`burger-bar ${isMenuOpen ? "clicked" : "unclicked"}`} />
      </div>
      <div className={`menu ${isMenuOpen ? "visivel" : "hidden"}`}>
        <div className="teste">
          <ul>
            <li>
              <Link to="/inicio">Sobre</Link>
            </li>
            <li>
              <Link to="/portifolio">Produtos</Link>
            </li>
            <li>
              <Link to="/contato">Sac</Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
