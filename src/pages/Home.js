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
          <Link to="/Dashboard">
          <a className="text-dark text-decoration-none">Dashboard</a>
          </Link>
         
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


      
      {/* New Enhanced Section */}
      <section
        className="features-section py-5"
        style={{ backgroundColor: "#A17C5D", color: "#ffffff" }} // Light brown background with white text
      >
        <div className="container">
          <h2 className="mb-5">Why Choose JobPortal?</h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div
                className="card h-100 shadow-lg border-0"
                style={{ backgroundColor: "#8B5E3C", color: "#ffffff" }} // Darker brown card background
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

      

      {/* Footer */}
      <footer className="footer py-3 bg-light text-dark">
        <p>Privacy Policy | Terms of Service | Contact</p>
        <div className="social-icons">🔗🔗🔗</div>
      </footer>
    </div>
  );
};

export default LandingPage;
