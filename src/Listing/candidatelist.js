import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Fetching candidates from the backend
    const fetchCandidates = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/applicants");
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

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
    <Container className="my-5">
      <h2 className="text-center mb-4">Candidate List</h2>
      <Row>
        {candidates.map((candidate) => (
          <Col md={6} lg={4} key={candidate._id} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{candidate.name}</Card.Title>
                <Card.Text>
                  <strong>Job Title:</strong> {candidate.jobTitle || "N/A"}
                </Card.Text>
                <Card.Text>
                  <strong>Experience:</strong> {candidate.jobExperience || "N/A"}
                </Card.Text>
                <Card.Text>
                  <strong>Email:</strong> {candidate.email}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    {/* Footer */}
    <footer className="footer py-3 bg-light text-dark">
        <p>Privacy Policy | Terms of Service | Contact</p>
        <div className="social-icons">🔗🔗🔗</div>
      </footer>
    </div>
  );
};

export default CandidateList;
