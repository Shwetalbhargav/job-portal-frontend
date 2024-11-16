import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import JobSeekerForm from "../Forms/JobSeekerForm";

import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div className="landing-page bg-white text-center">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center p-3 bg-brown text-white">
        <div className="h3 mb-0">JobPortal</div>
        <nav className="d-flex gap-3 align-items-center">
          <a href="#home" className="text-dark text-decoration-none">Home</a>
          <a href="#about" className="text-dark text-decoration-none">About Us</a>
          <a href="#contact" className="text-dark text-decoration-none">Contact</a>
          <button className="btn btn-outline-brown">Get Started</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero my-5">
        <h1 className="display-4 text-dark">Find the Perfect Opportunity or the Perfect Candidate</h1>
        <p className="text-secondary fs-5">Join a community dedicated to matching job seekers with employers.</p>
      </section>

      {/* User Selection Form */}
      <div className="form-container bg-light border rounded-3 p-5 mx-auto" style={{ maxWidth: "500px", borderColor: "#A17C5D" }}>
        <h2 className="text-dark">I’m a...</h2>
        <div className="d-flex justify-content-around mt-3">
          <Link to="/JobSeekerForm">
          <button className="btn btn-brown text-white px-4 py-2">Job Seeker</button>
          </Link>
          <Link to="/EmployerForm">
          <button className="btn btn-brown text-white px-4 py-2">Employer</button>
          </Link>
        </div>
        <p className="text-secondary mt-3">Choose an option to get started and explore opportunities.</p>
      </div>

      {/* How It Works Section */}
      <section className="how-it-works py-5 border-top">
        <div className="container d-flex justify-content-around">
          <div className="step text-center">          
            <div className="display-4">👤</div>
            <Link to="/jobListing">
            <p>Candidate List</p>
            </Link>
        </div>
         
          <div className="step text-center">
            <div className="display-4">📄</div>
            <Link to="/jobListing">
            <p>Job Listing</p>
            </Link>
          </div>
          <div className="step text-center">
            <div className="display-4">🤝</div>
            <p>Start Connecting</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-3 bg-light text-dark">
        <p>Privacy Policy | Terms of Service | Contact</p>
        <div className="social-icons">🔗🔗🔗</div>
      </footer>
    </div>
  );
};

export default LandingPage;
