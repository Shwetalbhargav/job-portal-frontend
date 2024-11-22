import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddAssignment = () => {
  const [formData, setFormData] = useState({
    listing: 0,
    link: [""],
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "listing") {
      setFormData((prevData) => ({
        ...prevData,
        listing: parseInt(value, 10),
      }));
    }
  };

  const handleLinkChange = (index, e) => {
    const updatedLinks = [...formData.link];
    updatedLinks[index] = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      link: updatedLinks,
    }));
  };

  const addLinkField = () => {
    setFormData((prevData) => ({
      ...prevData,
      link: [...prevData.link, ""],
    }));
  };

  const removeLinkField = (index) => {
    const updatedLinks = formData.link.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      link: updatedLinks,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    try {
      const response = await fetch(
        "https://api.trollgold.org/persistventures/assignment/add_assignment",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add assignment. Please try again.");
      }

      const result = await response.json();
      setResponseMessage(`Assignment added successfully: ${JSON.stringify(result)}`);
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Add Assignment Form</h1>
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

        <div className="mb-3">
          <label>Links</label>
          {formData.link.map((link, index) => (
            <div key={index} className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                value={link}
                onChange={(e) => handleLinkChange(index, e)}
                required
              />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeLinkField(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-secondary" onClick={addLinkField}>
            Add Link
          </button>
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Submitting..." : "Add Assignment"}
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

export default AddAssignment;
