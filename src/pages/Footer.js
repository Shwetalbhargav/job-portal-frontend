import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="py-4" style={{ backgroundColor: "#f8f8f8", color: "#333" }}>
      <div className="container">
        <div className="row">
          {/* Swissmote Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Swissmote</h5>
            <p>Connecting job seekers with unique hiring processes.</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#dashboard" className="text-decoration-none text-dark">Dashboard</a></li>
              <li><a href="#features" className="text-decoration-none text-dark">Features</a></li>
              <li><a href="#process" className="text-decoration-none text-dark">Process</a></li>
              <li><a href="#contact" className="text-decoration-none text-dark">Contact</a></li>
              <li><a href="#privacy" className="text-decoration-none text-dark">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Stay Connected Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Stay Connected</h5>
            <form className="d-flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control me-2"
                style={{ borderRadius: "5px" }}
              />
              <button type="submit" className="btn btn-dark">Subscribe</button>
            </form>
            <div className="mt-3 d-flex align-items-center">
              <a href="#facebook" className="me-3 text-dark"><FaFacebookF /></a>
              <a href="#twitter" className="me-3 text-dark"><FaTwitter /></a>
              <a href="#linkedin" className="me-3 text-dark"><FaLinkedinIn /></a>
              <a href="#instagram" className="text-dark"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2024 Swissmote. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
