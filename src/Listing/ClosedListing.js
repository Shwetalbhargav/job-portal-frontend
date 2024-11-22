import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ClosedListing = () => {
  const [formData, setFormData] = useState([
    {
      "Project Name": "",
      Organisation: "",
      "Listing No": "",
      Process: "Assignment",
      Designation: "",
      Date: "",
      "Conversion Rate": "",
      Internshala: "",
      "Leader link": "",
      "Candidate link": "",
      "Assignment link": "",
    },
  ]);

  const [responseMessage, setResponseMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFormData = [...formData];
    updatedFormData[index][name] = value;
    setFormData(updatedFormData);
  };

  const addListing = () => {
    setFormData([
      ...formData,
      {
        "Project Name": "",
        Organisation: "",
        "Listing No": "",
        Process: "Assignment",
        Designation: "",
        Date: "",
        "Conversion Rate": "",
        Internshala: "",
        "Leader link": "",
        "Candidate link": "",
        "Assignment link": "",
      },
    ]);
  };

  const removeListing = (index) => {
    const updatedFormData = formData.filter((_, i) => i !== index);
    setFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    try {
      const response = await fetch(
        "https://api.trollgold.org/persistventures/assignment/closedListings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit the closed listings. Please try again.");
      }

      const result = await response.json();
      setResponseMessage(`Closed listings submitted successfully: ${JSON.stringify(result)}`);
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Closed Listings Form</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        {formData.map((listing, index) => (
          <div key={index} className="border p-3 mb-4">
            <h4>Listing {index + 1}</h4>
            <div className="form-group mb-3">
              <label htmlFor={`Project Name-${index}`}>Project Name</label>
              <input
                type="text"
                className="form-control"
                id={`Project Name-${index}`}
                name="Project Name"
                value={listing["Project Name"]}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor={`Organisation-${index}`}>Organisation</label>
              <input
                type="text"
                className="form-control"
                id={`Organisation-${index}`}
                name="Organisation"
                value={listing.Organisation}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor={`Listing No-${index}`}>Listing No</label>
              <input
                type="number"
                className="form-control"
                id={`Listing No-${index}`}
                name="Listing No"
                value={listing["Listing No"]}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor={`Designation-${index}`}>Designation</label>
              <input
                type="text"
                className="form-control"
                id={`Designation-${index}`}
                name="Designation"
                value={listing.Designation}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor={`Date-${index}`}>Date</label>
              <input
                type="date"
                className="form-control"
                id={`Date-${index}`}
                name="Date"
                value={listing.Date}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor={`Conversion Rate-${index}`}>Conversion Rate</label>
              <input
                type="text"
                className="form-control"
                id={`Conversion Rate-${index}`}
                name="Conversion Rate"
                value={listing["Conversion Rate"]}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor={`Internshala-${index}`}>Internshala</label>
              <input
                type="text"
                className="form-control"
                id={`Internshala-${index}`}
                name="Internshala"
                value={listing.Internshala}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor={`Leader link-${index}`}>Leader Link</label>
              <input
                type="text"
                className="form-control"
                id={`Leader link-${index}`}
                name="Leader link"
                value={listing["Leader link"]}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor={`Candidate link-${index}`}>Candidate Link</label>
              <input
                type="text"
                className="form-control"
                id={`Candidate link-${index}`}
                name="Candidate link"
                value={listing["Candidate link"]}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor={`Assignment link-${index}`}>Assignment Link</label>
              <input
                type="text"
                className="form-control"
                id={`Assignment link-${index}`}
                name="Assignment link"
                value={listing["Assignment link"]}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => removeListing(index)}
            >
              Remove Listing
            </button>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-secondary mb-3"
          onClick={addListing}
        >
          Add Another Listing
        </button>
        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Submitting..." : "Submit Listings"}
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

export default ClosedListing;
