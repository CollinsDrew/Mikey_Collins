import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import { Link, useParams } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      {/* <h3>Mikey Collins Music</h3> */}
      <nav ref={navRef}>
        <Link to="/">
          <h2>Home</h2>
        </Link>

        <Link to="/contact">
          <h2>Contact</h2>
        </Link>

        <Link to="/shows">
          <h2>Shows</h2>
        </Link>

        <Link to={"/press"}>
          <h2>Press</h2>
        </Link>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export { Navbar };
