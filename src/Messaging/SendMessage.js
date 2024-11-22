import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SendMessage = () => {
  const [formData, setFormData] = useState({
    message: "",
    org: "",
  });

  const [attachedFile, setAttachedFile] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setAttachedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    const chatId = 1; // Change this value as needed
    const apiUrl = `https://api.trollgold.org/persistventures/assignment/send_message?chat_id=${chatId}`;

    const formDataToSend = new FormData();
    formDataToSend.append("message", formData.message);
    formDataToSend.append("org", formData.org);
    if (attachedFile) {
      formDataToSend.append("attached_file", attachedFile);
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      const result = await response.json();
      setResponseMessage(`Message sent successfully: ${JSON.stringify(result)}`);
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Send Message</h1>
      <form onSubmit={handleSubmit} className="mt-4">
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

        <div className="form-group mb-3">
          <label htmlFor="org">Organization</label>
          <input
            type="text"
            className="form-control"
            id="org"
            name="org"
            value={formData.org}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="attached_file">Attach File</label>
          <input
            type="file"
            className="form-control"
            id="attached_file"
            name="attached_file"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
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

export default SendMessage;
