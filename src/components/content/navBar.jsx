import React from "react";
import Dropdown from "../layouts/dropdown";
import Sections from "../layouts/sections";
import CartWidget from "../layouts/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  const searchBarText = ["Buscar en Lectulandia", "Buscar"];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Lectulandia
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <Sections />
              <Dropdown />
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </>
  );
};

export default NavBar;