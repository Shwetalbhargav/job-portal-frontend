import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GetMessage = () => {
  const [message, setMessage] = useState("invite_message");
  const [responseMessage, setResponseMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    try {
      const response = await fetch(
        `https://api.trollgold.org/persistventures/assignment/getMessage?message=${message}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch message. Please try again.");
      }

      const result = await response.json();
      setResponseMessage(`Message retrieved successfully: ${JSON.stringify(result)}`);
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Get Message</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group mb-3">
          <label htmlFor="message">Message Parameter</label>
          <input
            type="text"
            className="form-control"
            id="message"
            name="message"
            value={message}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Fetching..." : "Get Message"}
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

export default GetMessage;
