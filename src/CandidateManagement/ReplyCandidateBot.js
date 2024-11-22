import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ReplyCandidateBot = () => {
  const [formData, setFormData] = useState({
    chat_id: 0,
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "chat_id" ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    const apiUrl = "https://api.trollgold.org/persistventures/assignment/replyCandidateBot?listing=1";

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
        throw new Error("Failed to send reply. Please try again.");
      }

      const result = await response.json();
      setResponseMessage(`Reply sent successfully: ${JSON.stringify(result)}`);
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Reply Candidate Bot</h1>
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
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Sending..." : "Send Reply"}
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

export default ReplyCandidateBot;
