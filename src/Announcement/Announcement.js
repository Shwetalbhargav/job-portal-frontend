import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Announcement = () => {
  const [formData, setFormData] = useState({
    listing: 0,
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "listing" ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    const apiUrl = "https://api.trollgold.org/persistventures/assignment/announcement";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to initiate announcement. Please try again.");
      }

      const result = await response.json();
      setResponseMessage(`Success: ${result.message}`);
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Create Announcement</h1>
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
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Submitting..." : "Create Announcement"}
        </button>
      </form>

      {responseMessage && (
        <div className={`alert mt-4 ${responseMessage.startsWith("Success") ? "alert-success" : "alert-danger"}`} role="alert">
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default Announcement;
