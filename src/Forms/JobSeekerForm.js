import React, { useState } from "react";
import { Form, Button,  Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { getApplicants, registerApplicant } from "../services/api";

const JobSeekerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    skillset: [],
    jobTitle: "",
    jobExperience: "",
    projectSubmission: "",
    jobProfileResume: null,
    internshipExperienceLetter: null,
    mobileNumber: "",
    coverLetterType: "text",
    coverLetterText: "",
    coverLetterFile: null,
    workPreference: "WFO"
  });

  const skillOptions = ["JavaScript", "Python", "Java", "C++", "React", "Node.js", "SQL", "Data Analysis"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (e) => {
    const selectedSkills = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, skillset: selectedSkills });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for API submission
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("skillset", JSON.stringify(formData.skillset));
    data.append("jobTitle", formData.jobTitle);
    data.append("jobExperience", formData.jobExperience);
    data.append("projectSubmission", formData.projectSubmission);
    data.append("mobileNumber", formData.mobileNumber);
    data.append("workPreference", formData.workPreference);

    // Add file fields if they exist
    if (formData.jobProfileResume) data.append("jobProfileResume", formData.jobProfileResume);
    if (formData.internshipExperienceLetter) data.append("internshipExperienceLetter", formData.internshipExperienceLetter);

    // Handle cover letter based on its type
    if (formData.coverLetterType === "text") {
      data.append("coverLetter", formData.coverLetterText);
    } else if (formData.coverLetterFile) {
      data.append("coverLetter", formData.coverLetterFile);
    }

    try {
      const response = await registerApplicant(data,{"Content-Type": "multipart/form-data" });
        
      
      alert("Registration successful!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    }
  };


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
    
    <Container className="py-5">
    <Row className="justify-content-center">
      <Col lg={8} md={10}>
        <Card className="shadow p-4">
          <Card.Body>
            <h3 className="text-center mb-4">Job Seeker Application</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="password" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a password"
                  required
                />
              </Form.Group>

              <Form.Group controlId="skillset" className="mb-3">
                <Form.Label>Skillset</Form.Label>
                <Form.Select
                 name="skillset"
                 multiple
                 onChange={(e) => {
                         const selectedSkills = Array.from(e.target.selectedOptions, (option) => option.value);
                        setFormData({ ...formData, skillset: selectedSkills });
                        }}
                      >

                  {skillOptions.map((skill, index) => (
                    <option key={index} value={skill}>
                      {skill}
                    </option>
                  ))}
                </Form.Select>

               {/* Display selected skills as removable badges */}
                 <div className="mt-2">
                   {formData.skillset.map((skill, index) => (
                 <span
                    key={index}
                    className="badge bg-primary me-2 mb-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
          // Remove skill from the selected list
                      const updatedSkills = formData.skillset.filter((s) => s !== skill);
                      setFormData({ ...formData, skillset: updatedSkills });
                  }}
                >
        {skill} ×
      </span>
    ))}
      
    
  </div>
              </Form.Group>

              <Form.Group controlId="jobTitle" className="mb-3">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="Desired job title"
                />
              </Form.Group>

              <Form.Group controlId="jobExperience" className="mb-3">
                <Form.Label>Experience</Form.Label>
                <Form.Control
                  type="text"
                  name="jobExperience"
                  value={formData.jobExperience}
                  onChange={handleInputChange}
                  placeholder="Years of experience"
                />
              </Form.Group>

              <Form.Group controlId="mobileNumber" className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your mobile number"
                  required
                />
              </Form.Group>

              <Form.Group controlId="coverLetter" className="mb-3">
                <Form.Label>Cover Letter</Form.Label>
                <Form.Check
                  type="radio"
                  label="Text"
                  name="coverLetterType"
                  value="text"
                  checked={formData.coverLetterType === "text"}
                  onChange={handleInputChange}
                  inline
                />
                <Form.Check
                  type="radio"
                  label="File"
                  name="coverLetterType"
                  value="file"
                  checked={formData.coverLetterType === "file"}
                  onChange={handleInputChange}
                  inline
                />
                {formData.coverLetterType === "text" ? (
                  <Form.Control
                    as="textarea"
                    name="coverLetterText"
                    value={formData.coverLetterText}
                    onChange={handleInputChange}
                    placeholder="Write your cover letter here"
                    rows={3}
                  />
                ) : (
                  <Form.Control
                    type="file"
                    name="coverLetterFile"
                    accept=".pdf"
                    onChange={handleFileChange}
                  />
                )}
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100">
                Submit Application
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
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

export default JobSeekerForm;
