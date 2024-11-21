import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const EmployerForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "string",
  minExperience: 0,
  skills: "string",
  jobType: "virtual", 
  jobPartFull: "part",
  numPosition: 0,
  minSalary: 0,
  maxSalary: 0,
  account: "Org 1",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      job_title: formData.jobTitle,
      min_experience: parseInt(formData.minExperience, 10),
      skills: formData.skills.split(",").map(skill => skill.trim()), // Convert comma-separated string to array
      job_type: formData.jobType,
      job_part_full: formData.jobPartFull,
      num_position: parseInt(formData.numPosition, 10),
      min_salary: parseInt(formData.minSalary, 10),
      max_salary: parseInt(formData.maxSalary, 10),
      account: formData.account,
    };
  
    try {
      const response = await axios.post(
        "https://api.trollgold.org/persistventures/assignment/make_Job",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      alert("Posting successful!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    }
  };
  return (
    <Container className="py-5">
    <Row className="justify-content-center">
      <Col lg={8} md={10}>
        <Card className="shadow p-4">
          <Card.Body>
            <h3 className="text-center mb-4">Post a Job</h3>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="jobTitle" className="mb-3">
                <Form.Label>Organization Name</Form.Label>
                <Form.Control
                  type="text"
                  name="account"
                  value={formData.account}
                  onChange={handleInputChange}
                  placeholder="Enter organization name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="jobTitle" className="mb-3">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="Enter job title"
                  required
                />
              </Form.Group>

              <Form.Group controlId="minExperience" className="mb-3">
                <Form.Label>Minimum Experience (years)</Form.Label>
                <Form.Control
                  type="number"
                  name="minExperience"
                  value={formData.minExperience}
                  onChange={handleInputChange}
                  placeholder="Enter minimum experience required"
                />
              </Form.Group>

              <Form.Group controlId="skills" className="mb-3">
                <Form.Label>Skills Required</Form.Label>
                <Form.Control
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="Enter required skills (comma-separated)"
                />
              </Form.Group>

              <Form.Group controlId="jobType" className="mb-3">
                <Form.Label>Job Type</Form.Label>
                <Form.Select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleInputChange}
                >
                  <option value="virtual">Virtual</option>
                  <option value="on-site">On-site</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="jobPartFull" className="mb-3">
                <Form.Label>Job Nature</Form.Label>
                <Form.Select
                  name="jobPartFull"
                  value={formData.jobPartFull}
                  onChange={handleInputChange}
                >
                  <option value="part">Part-time</option>
                  <option value="full">Full-time</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="numPosition" className="mb-3">
                <Form.Label>Number of Positions</Form.Label>
                <Form.Control
                  type="number"
                  name="numPosition"
                  value={formData.numPosition}
                  onChange={handleInputChange}
                  placeholder="Enter number of positions"
                />
              </Form.Group>

              <Form.Group controlId="minSalary" className="mb-3">
                <Form.Label>Minimum Salary</Form.Label>
                <Form.Control
                  type="number"
                  name="minSalary"
                  value={formData.minSalary}
                  onChange={handleInputChange}
                  placeholder="Enter minimum salary"
                />
              </Form.Group>

              <Form.Group controlId="maxSalary" className="mb-3">
                <Form.Label>Maximum Salary</Form.Label>
                <Form.Control
                  type="number"
                  name="maxSalary"
                  value={formData.maxSalary}
                  onChange={handleInputChange}
                  placeholder="Enter maximum salary"
                />
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100">
                Submit Job Posting
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
    
    
  );
};

export default EmployerForm;
