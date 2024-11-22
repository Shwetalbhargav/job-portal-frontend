import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GetUpdate = () => {
  const [formData, setFormData] = useState({
    listing: 1,
    offset: 0,
    limit: 10,
  });

  const [updates, setUpdates] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseInt(value, 10),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    const { listing, offset, limit } = formData;
    const apiUrl = `https://api.trollgold.org/persistventures/assignment/getUpdates?listing=${listing}&offset=${offset}&limit=${limit}`;

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch updates. Please try again.");
      }

      const result = await response.json();
      setUpdates(result.daily_updates || []);
      setPagination(result.pagination || null);
      setResponseMessage(result.message || "Updates retrieved successfully.");
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
      setUpdates([]);
      setPagination(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Get Updates</h1>
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
          <label htmlFor="offset">Offset</label>
          <input
            type="number"
            className="form-control"
            id="offset"
            name="offset"
            value={formData.offset}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="limit">Limit</label>
          <input
            type="number"
            className="form-control"
            id="limit"
            name="limit"
            value={formData.limit}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Fetching..." : "Get Updates"}
        </button>
      </form>

      {responseMessage && (
        <div className={`alert mt-4 ${updates.length > 0 ? "alert-success" : "alert-danger"}`} role="alert">
          {responseMessage}
        </div>
      )}

      {pagination && (
        <div className="mt-4">
          <h4>Pagination Info</h4>
          <ul className="list-group">
            <li className="list-group-item">Total Count: {pagination.total_count}</li>
            <li className="list-group-item">Total Pages: {pagination.total_pages}</li>
            <li className="list-group-item">Current Page: {pagination.current_page}</li>
            <li className="list-group-item">Page Size: {pagination.page_size}</li>
          </ul>
        </div>
      )}

      {updates.length > 0 && (
        <div className="mt-4">
          <h4>Daily Updates</h4>
          <ul className="list-group">
            {updates.map((update) => (
              <li key={update.id} className="list-group-item">
                <strong>ID:</strong> {update.id} <br />
                <strong>Chat ID:</strong> {update.chat_id} <br />
                <strong>Update:</strong> {update.Update} <br />
                <strong>Timestamp:</strong> {update.time_stamp}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GetUpdate;
