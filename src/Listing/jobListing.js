import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";


const JobListingPage = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    organisation: "",
    listingNo: "",
    process: "",
    designation: "",
    date: "",
    conversionRate: "",
    internshala: "",
    leaderLink: "",
    candidateLink: "",
    assignmentLink: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.trollgold.org/persistventures/assignment/activeListing"
        );
        const data = await response.json();

        // Assuming the response data matches the structure provided
        setFormData({
          projectName: data["Project Name"] || "",
          organisation: data["Organisation"] || "",
          listingNo: data["Listing No"] || "",
          process: data["Process"] || "",
          designation: data["Designation"] || "",
          date: data["Date"] || "",
          conversionRate: data["Conversion Rate"] || "",
          internshala: data["Internshala"] || "",
          leaderLink: data["Leader link"] || "",
          candidateLink: data["Candidate link"] || "",
          assignmentLink: data["Assignment link"] || "",
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // You can add POST request logic here
  };

  return (
    <div className="container mt-5">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Job Listing</Card.Title>
          <div className="container mt-5">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Job Assignment Form</Card.Title>
          <Form onSubmit={handleSubmit}>
            {Object.keys(formData).map((key) => (
              <Form.Group className="mb-3" controlId={key} key={key}>
                <Form.Label>{key.replace(/([A-Z])/g, " $1")}</Form.Label>
                <Form.Control
                  type="text"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  placeholder={`Enter ${key.replace(/([A-Z])/g, " $1")}`}
                />
              </Form.Group>
            ))}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JobListingPage;
