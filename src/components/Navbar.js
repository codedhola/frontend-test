import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Coded Hola</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
