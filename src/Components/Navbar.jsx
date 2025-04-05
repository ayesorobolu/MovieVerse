import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BiSolidCameraMovie } from "react-icons/bi";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"; 
import "../css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          MovieVerse <BiSolidCameraMovie className="icon" />
        </Link>
      </div>

      <div className="burger-icon" onClick={toggleMenu}>
        {menuOpen ? <RiCloseLine /> : <RiMenu3Line />} 
      </div>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
        <Link to="/favorites" className="nav-link" onClick={toggleMenu}>Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
