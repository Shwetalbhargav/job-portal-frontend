import React from "react";
import { FaHome, FaUserAlt, FaEnvelope, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming you have a separate CSS file

const Navbar = () => {
  return (
    <header
      className="navbar d-flex justify-content-between align-items-center p-3"
      style={{ backgroundColor: "rgb(120, 167, 185)", color: "white" }}
    >
      {/* Brand Name */}
      <div className="brand h3 mb-0">SwissMote</div>

      {/* Search Bar */}
      <div className="search-bar d-flex align-items-center">
        <input
          type="text"
          placeholder="Search..."
          className="form-control me-2"
          style={{ borderRadius: "20px" }}
        />
        <button className="btn btn-search">
          <FaSearch />
        </button>
      </div>

      {/* Navigation */}
      <nav className="d-flex gap-4 align-items-center">
        <Link to="/LandingPage"  style={{textDecoration:"none"}}>
        <button className="nav-btn">
          <FaHome className="me-1" />
          Home
        </button>
        </Link>
        <Link to="/Dashboard"  style={{textDecoration:"none"}}>
        <button className="nav-btn" >
          <FaUserAlt className="me-1" />
          Dashboard
        </button>
        </Link>
        <Link   style={{textDecoration:"none"}}>
        <button className="nav-btn">
          <FaEnvelope className="me-1" />
          Contact
        </button>
        </Link>
      </nav>

      {/* Actions */}
      <div className="actions d-flex gap-3">
        <button className="auth-btn">Login</button>
        <button className="auth-btn">Register</button>
      </div>
    </header>
  );
};

export default Navbar;
