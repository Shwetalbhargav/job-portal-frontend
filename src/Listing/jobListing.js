import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getApplicants } from "../services/api"; 

const JobListingPage = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const applicants = await getApplicants();
        setCandidates(applicants);
      } catch (error) {
        console.error("Error fetching applicants:", error);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <div className="container mt-5">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Job Listing</Card.Title>
          <ul>
            {candidates.map((candidate) => (
              <li key={candidate._id}>
                <strong>Name:</strong> {candidate.name} |
                <strong> Email:</strong> {candidate.email} |
                <strong> Job Title:</strong> {candidate.jobTitle} |
                <strong> Experience:</strong> {candidate.jobExperience}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JobListingPage;
