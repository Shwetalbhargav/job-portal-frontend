import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CandidateEmail = () => {
  const [formData, setFormData] = useState({
    candidate_id: "",
    org: "Org 1",
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

    const { candidate_id, org } = formData;
    const apiUrl = `https://api.trollgold.org/persistventures/assignment/candidateEmail?candidate_id=${candidate_id}&org=${org}`;

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch candidate email. Please try again.");
      }

      const result = await response.json();
      setResponseMessage(`Email data retrieved successfully: ${JSON.stringify(result)}`);
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Get Candidate Email</h1>
      <form onSubmit={handleSubmit} className="mt-4">
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

        <div className="form-group mb-3">
          <label htmlFor="org">Organization</label>
          <select
            className="form-control"
            id="org"
            name="org"
            value={formData.org}
            onChange={handleInputChange}
          >
            <option value="Org 1">Org 1</option>
            <option value="Org 2">Org 2</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Fetching..." : "Get Candidate Email"}
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

export default CandidateEmail;
