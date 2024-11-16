import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const EmployerForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    address: "",
    companyDetails: "",
    linkedin: "",
    twitter: "",
    website: "",
    jobType: "job", // default to 'job', can also be 'internship'
    jobTitle: "",
    jobDescription: "",
    jobExperience: "",
    workPreference: "WFO",
    internshipDetails: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiEndpoint =
      formData.jobType === "job"
      ? "https://api.trollgold.org/persistventures/assignment/make_Job"
      : "https://api.trollgold.org/persistventures/assignment/make_Internship";
     
      

    const payload = {
      companyName: formData.companyName,
      address: formData.address,
      companyDetails: formData.companyDetails,
      linkedin: formData.linkedin,
      twitter: formData.twitter,
      website: formData.website,
      jobTitle: formData.jobTitle,
      jobDescription: formData.jobDescription,
      jobExperience: formData.jobExperience,
      workPreference: formData.workPreference,
      ...(formData.jobType === "internship" && {
        internshipDetails: formData.internshipDetails,
      }),
    };

    try {
      const response = await axios.post(apiEndpoint, payload, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Posting successful!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div className="landing-page bg-white text-center">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center p-3 bg-primary text-white">
        <div className="h3 mb-0">Employer Portal</div>
        <nav className="d-flex gap-3 align-items-center">
          <a href="#home" className="text-white text-decoration-none">
            Home
          </a>
          <a href="#about" className="text-white text-decoration-none">
            About Us
          </a>
          <a href="#contact" className="text-white text-decoration-none">
            Contact
          </a>
        </nav>
      </header>

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <Card className="shadow p-4">
              <Card.Body>
                <h3 className="text-center mb-4">Post a Job or Internship</h3>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="companyName" className="mb-3">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Enter your company's name"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="address" className="mb-3">
                    <Form.Label>Company Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your company's address"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="companyDetails" className="mb-3">
                    <Form.Label>Company Details</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="companyDetails"
                      value={formData.companyDetails}
                      onChange={handleInputChange}
                      placeholder="Provide some details about your company"
                      rows={3}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="linkedin" className="mb-3">
                    <Form.Label>LinkedIn Profile</Form.Label>
                    <Form.Control
                      type="text"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      placeholder="Enter LinkedIn URL"
                    />
                  </Form.Group>

                  <Form.Group controlId="twitter" className="mb-3">
                    <Form.Label>Twitter Profile</Form.Label>
                    <Form.Control
                      type="text"
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleInputChange}
                      placeholder="Enter Twitter URL"
                    />
                  </Form.Group>

                  <Form.Group controlId="website" className="mb-3">
                    <Form.Label>Company Website</Form.Label>
                    <Form.Control
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="Enter your company's website URL"
                    />
                  </Form.Group>

                  <Form.Group controlId="jobType" className="mb-3">
                    <Form.Label>Type</Form.Label>
                    <Form.Select
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleInputChange}
                    >
                      <option value="job">Job</option>
                      <option value="internship">Internship</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="jobTitle" className="mb-3">
                    <Form.Label>Job/Internship Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      placeholder="Enter the title"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="jobDescription" className="mb-3">
                    <Form.Label>Job/Internship Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="jobDescription"
                      value={formData.jobDescription}
                      onChange={handleInputChange}
                      placeholder="Provide a brief description"
                      rows={4}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="jobExperience" className="mb-3">
                    <Form.Label>Experience Required</Form.Label>
                    <Form.Control
                      type="text"
                      name="jobExperience"
                      value={formData.jobExperience}
                      onChange={handleInputChange}
                      placeholder="Enter years of experience"
                    />
                  </Form.Group>

                  <Form.Group controlId="workPreference" className="mb-3">
                    <Form.Label>Work Preference</Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        label="WFH"
                        name="workPreference"
                        value="WFH"
                        checked={formData.workPreference === "WFH"}
                        onChange={handleInputChange}
                      />
                      <Form.Check
                        inline
                        type="radio"
                        label="WFO"
                        name="workPreference"
                        value="WFO"
                        checked={formData.workPreference === "WFO"}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Form.Group>

                  {formData.jobType === "internship" && (
                    <Form.Group controlId="internshipDetails" className="mb-3">
                      <Form.Label>Internship Details</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="internshipDetails"
                        value={formData.internshipDetails}
                        onChange={handleInputChange}
                        placeholder="Provide details about the internship"
                        rows={3}
                      />
                    </Form.Group>
                  )}

                  <Button type="submit" variant="primary" className="w-100">
                    Submit Posting
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmployerForm;
