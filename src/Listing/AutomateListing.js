import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AutomateListing = () => {
  const [formData, setFormData] = useState({
    listing: 0,
    name: "",
    process: "offer",
    assignment_link: "",
    designation: "",
    active_status: true,
    account: "Org 1",
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    try {
      const response = await fetch(
        "https://api.trollgold.org/persistventures/assignment/automate_Listing",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit the listing. Please try again.");
      }

      const result = await response.json();
      setResponseMessage(`Listing automated successfully: ${JSON.stringify(result)}`);
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Automate Listing Form</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group mb-3">
          <label htmlFor="listing">Listing ID</label>
          <input
            type="number"
            className="form-control"
            id="listing"
            name="listing"
            value={formData.listing}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="process">Process</label>
          <select
            className="form-control"
            id="process"
            name="process"
            value={formData.process}
            onChange={handleInputChange}
          >
            <option value="offer">Offer</option>
            <option value="interview">Interview</option>
            <option value="application">Application</option>
          </select>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="assignment_link">Assignment Link</label>
          <input
            type="text"
            className="form-control"
            id="assignment_link"
            name="assignment_link"
            value={formData.assignment_link}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            className="form-control"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="active_status"
            name="active_status"
            checked={formData.active_status}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="active_status">
            Active Status
          </label>
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
          {loading ? "Submitting..." : "Submit Listing"}
        </button>
      </form>

      {responseMessage && (
        <div className="alert mt-4" role="alert" style={{ color: loading ? "blue" : responseMessage.startsWith("Error") ? "red" : "green" }}>
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default AutomateListing;
