import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GetChat = () => {
  const [formData, setFormData] = useState({
    listing: "",
    candidate_id: "",
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    const { listing, candidate_id } = formData;
    const apiUrl = `https://api.trollgold.org/persistventures/assignment/get_chat?listing=${listing}&candidate_id=${candidate_id}`;

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch chat. Please try again.");
      }

      const result = await response.json();
      setResponseMessage(`Chat data retrieved successfully: ${JSON.stringify(result)}`);
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Get Chat</h1>
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
          <label htmlFor="candidate_id">Candidate ID</label>
          <input
            type="number"
            className="form-control"
            id="candidate_id"
            name="candidate_id"
            value={formData.candidate_id}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Fetching..." : "Get Chat"}
        </button>
      </form>

      {responseMessage && (
        <div className="alert mt-4" role="alert">
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default GetChat;
