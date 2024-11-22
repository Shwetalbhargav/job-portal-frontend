import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GetListing = () => {
  const [formData, setFormData] = useState({
    emp_type: "job",
    account: "Org 1",
  });

  const [responseData, setResponseData] = useState({});
  const [loading, setLoading] = useState(false);

  const apiUrls = {
    "Org 1 - Job": "https://api.trollgold.org/persistventures/assignment/get_listings?emp_type=job&account=Org%201",
    "Org 2 - Job": "https://api.trollgold.org/persistventures/assignment/get_listings?emp_type=job&account=Org%202",
    "Org 1 - Internship": "https://api.trollgold.org/persistventures/assignment/get_listings?emp_type=internship&account=Org%201",
    "Org 2 - Internship": "https://api.trollgold.org/persistventures/assignment/get_listings?emp_type=internship&account=Org%202",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const apiKey = `${formData.account} - ${formData.emp_type.charAt(0).toUpperCase() + formData.emp_type.slice(1)}`;
    const apiUrl = apiUrls[apiKey];

    if (!apiUrl) {
      alert("Invalid combination of inputs!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.error("Error fetching API:", error);
      alert("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Assignment API Form</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group mb-3">
          <label htmlFor="emp_type">Employment Type</label>
          <select
            className="form-control"
            id="emp_type"
            name="emp_type"
            value={formData.emp_type}
            onChange={handleInputChange}
          >
            <option value="job">Job</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="account">Account</label>
          <select
            className="form-control"
            id="account"
            name="account"
            value={formData.account}
            onChange={handleInputChange}
          >
            <option value="Org 1">Org 1</option>
            <option value="Org 2">Org 2</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Loading..." : "Fetch Listings"}
        </button>
      </form>

      {responseData.automated && (
        <div className="mt-5">
          <h2>Automated Listings</h2>
          <ul className="list-group">
            {responseData.automated.map((item, index) => (
              <li className="list-group-item" key={index}>
                <strong>Listing Name:</strong> {item.listing_name} <br />
                <strong>Listing Number:</strong> {item.listing_number} <br />
                <strong>Project Name:</strong> {item.projectname} <br />
                <strong>Date:</strong> {item.date} <br />
                <strong>Assignment Links:</strong> {item.assignment_link.join(", ")} <br />
              </li>
            ))}
          </ul>
        </div>
      )}

      {responseData.not_automated && (
        <div className="mt-5">
          <h2>Not Automated Listings</h2>
          <ul className="list-group">
            {responseData.not_automated.map((item, index) => (
              <li className="list-group-item" key={index}>
                <strong>Listing Name:</strong> {item.listing_name} <br />
                <strong>Listing Number:</strong> {item.listing_number}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GetListing;
