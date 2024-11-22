import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HireCandidate = () => {
  const [candidateIds, setCandidateIds] = useState([""]);
  const [responseMessage, setResponseMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (index, e) => {
    const updatedCandidateIds = [...candidateIds];
    updatedCandidateIds[index] = e.target.value;
    setCandidateIds(updatedCandidateIds);
  };

  const addCandidateIdField = () => {
    setCandidateIds([...candidateIds, ""]);
  };

  const removeCandidateIdField = (index) => {
    const updatedCandidateIds = candidateIds.filter((_, i) => i !== index);
    setCandidateIds(updatedCandidateIds);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    const apiUrl = "https://api.trollgold.org/persistventures/assignment/hire_candidate?listing=1";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ candidate_id: candidateIds.map(Number) }),
      });

      if (!response.ok) {
        throw new Error("Failed to hire candidates. Please try again.");
      }

      const result = await response.json();
      setResponseMessage(`Candidates hired successfully: ${JSON.stringify(result)}`);
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Hire Candidate</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label>Candidate IDs</label>
          {candidateIds.map((id, index) => (
            <div key={index} className="input-group mb-2">
              <input
                type="number"
                className="form-control"
                value={id}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeCandidateIdField(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={addCandidateIdField}
          >
            Add Candidate ID
          </button>
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Hiring..." : "Hire Candidates"}
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

export default HireCandidate;
