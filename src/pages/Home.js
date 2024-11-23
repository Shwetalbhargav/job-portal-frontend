import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaUser, FaFileAlt, FaHandshake } from "react-icons/fa";
import JobSeekerForm from "../Forms/JobSeekerForm";


import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div className="landing-page bg-white text-center">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center p-3 bg-brown text-white">
        <div className="h3 mb-0">SwissMote</div>
        <nav className="d-flex gap-3 align-items-center">
          <a href="#home" className="text-dark text-decoration-none">Home</a>
          <Link to="/Dashboard" className="text-dark text-decoration-none">
          Dashboard
          </Link>
         
          <a href="#contact" className="text-dark text-decoration-none">Contact</a>
          <button className="btn btn-outline-brown">Get Started</button>
        </nav>
      </header>

      {/* Hero Section and User Selection */}
<section className="hero-section bg-light py-5 text-center"
style={{
  backgroundImage: "url('/LandingPage.png')", 
  backgroundSize: "cover",
  backgroundPosition: "center",
   
}}>
  <div className="container">
    {/* Hero Header */}
    <h1 className="display-4 fw-bold text-dark mb-4">
      Find the Perfect Opportunity or the Perfect Candidate
    </h1>
    <p className="text-dark fs-5 mb-5">
      Join a community dedicated to matching job seekers with employers.
    </p>

    {/* User Selection */}
    <div className="form-container d-inline-flex flex-column align-items-center gap-3">
      <h2 className="text-dark">I’m a...</h2>
      <div className="d-flex justify-content-center gap-4 mt-2">
        <Link to="/JobSeekerForm" style={{ textDecoration: "none" }}>
          <button
            className="btn btn-primary px-5 py-3 shadow rounded-pill d-flex align-items-center gap-2"
            style={{
              fontSize: "1rem",
              backgroundColor: "rgb(67, 81, 133)",
              border: "none",
            }}
          >
            <FaUser />
            Job Seeker
          </button>
        </Link>
        <Link to="/EmployerForm" style={{ textDecoration: "none" }}>
          <button
            className="btn btn-secondary px-5 py-3 shadow rounded-pill d-flex align-items-center gap-2"
            style={{
              fontSize: "1rem",
              backgroundColor: "rgb(67, 81, 133)",
              border: "none",
            }}
          >
            <FaFileAlt />
            Employer
          </button>
        </Link>
      </div>
      <p className="text-secondary mt-3">Choose an option to get started and explore opportunities.</p>
    </div>
  </div>

  {/* How It Works Section */}
  <div className="how-it-works py-5 mt-5 border-top">
    <div className="container d-flex justify-content-around align-items-center flex-wrap gap-4">
      <div className="step text-center">
        <div className="icon display-4 mb-3 text-primary">
          <FaUser />
        </div>
        <Link to="/jobListing" className="text-decoration-none">
          <p className="fw-bold text-dark">Candidate List</p>
        </Link>
      </div>
      <div className="step text-center">
        <div className="icon display-4 mb-3 text-success">
          <FaFileAlt />
        </div>
        <Link to="/jobListing" className="text-decoration-none">
          <p className="fw-bold text-dark">Job Listing</p>
        </Link>
      </div>
      <div className="step text-center">
        <div className="icon display-4 mb-3 text-warning">
          <FaHandshake />
        </div>
        <p className="fw-bold text-dark">Start Connecting</p>
      </div>
    </div>
  </div>
</section>

      

      


      
      {/* New Enhanced Section */}
      <section
        className="features-section py-5"
        style={{ backgroundColor: "rgb(120, 167, 185)", color: "#ffffff" }} // Light brown background with white text
      >
        <div className="container">
          <h2 className="mb-5">Why Choose JobPortal?</h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div
                className="card h-100 shadow-lg border-0"
                style={{  backgroundColor: "rgb(109, 228, 223)", color: "#ffffff"   }} 
              >
                <div className="card-body text-center">
                  <div
                    className="icon mb-3"
                    style={{
                      fontSize: "2.5rem",
                      color: "#FFD700", // Golden yellow icon
                    }}
                  >
                    📋
                  </div>
                  <h5 className="card-title">Effortless Job Listings</h5>
                  <p className="card-text">
                    Post, edit, and organize job opportunities with just a few
                    clicks.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div
                className="card h-100 shadow-lg border-0"
                style={{ backgroundColor: "#8B5E3C", color: "#ffffff" }}
              >
                <div className="card-body text-center">
                  <div
                    className="icon mb-3"
                    style={{
                      fontSize: "2.5rem",
                      color: "#FF7F50", // Coral icon
                    }}
                  >
                    👤
                  </div>
                  <h5 className="card-title">Streamlined Candidate Tracking</h5>
                  <p className="card-text">
                    Track candidates efficiently with powerful automated tools.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <div
                className="card h-100 shadow-lg border-0"
                style={{ backgroundColor: "#8B5E3C", color: "#ffffff" }}
              >
                <div className="card-body text-center">
                  <div
                    className="icon mb-3"
                    style={{
                      fontSize: "2.5rem",
                      color: "#FFE4B5", // Moccasin icon
                    }}
                  >
                    📌
                  </div>
                  <h5 className="card-title">Intelligent Task Automation</h5>
                  <p className="card-text">
                    Automate workflows to make hiring faster and smoother.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mb-5 mt-5">What Our Users Say</h2>
          <div className="row">
            {/* Testimonial 1 */}
            <div className="col-md-4 mb-4">
              <div
                className="card h-100 shadow-lg border-0"
                style={{ backgroundColor: "#8B5E3C", color: "#ffffff" }}
              >
                <div className="card-body text-center">
                  <p className="card-text">
                    "The process is so simple and effective. It made recruitment
                    effortless."
                  </p>
                  <h6 className="card-subtitle mt-3 text-light">- Amit Tondon</h6>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="col-md-4 mb-4">
              <div
                className="card h-100 shadow-lg border-0"
                style={{ backgroundColor: "#8B5E3C", color: "#ffffff" }}
              >
                <div className="card-body text-center">
                  <p className="card-text">
                    "I loved the task automation feature. It saved so much
                    time!"
                  </p>
                  <h6 className="card-subtitle mt-3 text-light">- Swati Parmar</h6>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="col-md-4 mb-4">
              <div
                className="card h-100 shadow-lg border-0"
                style={{ backgroundColor: "#8B5E3C", color: "#ffffff" }}
              >
                <div className="card-body text-center">
                  <p className="card-text">
                    "This platform makes hiring transparent and skill-focused.
                    Loved it!"
                  </p>
                  <h6 className="card-subtitle mt-3 text-light">
                    - Aditya Shroff
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="form-section">
  <h1 className="form-title">Get in Touch</h1>
  <p className="form-description">
    Have questions or want to reach out? Fill in the form below, and we'll get back to you as soon as possible.
  </p>
  <form className="form">
    <div className="form-input-group">
      <input type="text" placeholder="Your Name" className="form-input" />
      <input type="email" placeholder="Your Email" className="form-input" />
    </div>
    <textarea placeholder="Your Message" rows="6" className="form-textarea"></textarea>
    <button type="submit" className="form-button">Send Message</button>
  </form>
</div>

      

      
    </div>
  );
};

export default LandingPage;
