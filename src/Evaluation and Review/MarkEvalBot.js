import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MarkEvalBot = () => {
  const [formData, setFormData] = useState({
    chat_id: "",
    listing: "",
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

    const { chat_id, listing } = formData;
    const apiUrl = `https://api.trollgold.org/persistventures/assignment/mark_eval_bot?chat_id=${chat_id}&listing=${listing}`;

    try {
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to mark evaluation. Please try again.");
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
      <h1 className="text-center">Mark Evaluation via Bot</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group mb-3">
          <label htmlFor="chat_id">Chat ID</label>
          <input
            type="number"
            className="form-control"
            id="chat_id"
            name="chat_id"
            value={formData.chat_id}
            onChange={handleInputChange}
            required
          />
        </div>

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

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Processing..." : "Mark Evaluated"}
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

export default MarkEvalBot;