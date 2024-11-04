import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddReview.css';

export default function AddReview() {

  const [formData, setFormData] = useState({
    customerName: '',
    serviceType: '',
    serviceReview: '',
    rating: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (e) => {
    const rating = parseFloat(e.target.value).toFixed(1);
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const navigate = useNavigate();

  return (
    <div className="main-container">
      <button className="close-buttonn"  onClick={() => navigate(-1)}>X</button>
      
      <h1 className="title">Add a Review</h1>
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="label">Customer Name :</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            className="input"
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label className="label">Service Type :</label>
          <input
            type="text"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            className="input"
            placeholder="Enter service type"
          />
        </div>

        <div className="form-group">
          <label className="label">Service Review :</label>
          <textarea
            name="serviceReview"
            value={formData.serviceReview}
            onChange={handleInputChange}
            className="textarea"
            placeholder="Write your review here"
            rows={4}
          />
        </div>

        <div className="form-group">
          <label className="label">
            Leave a Rating: <span className="rating-value">{formData.rating}</span>
          </label>
          <input
            type="range"
            name="rating"
            min="0"
            max="5"
            step="0.5"
            value={formData.rating}
            onChange={handleRatingChange}
            className="rating-slider"
          />
          <div className="rating-labels">
            <span>0</span>
            <span>5</span>
          </div>
        </div>

        <button type="submit" className="submit-button" onClick={() => navigate('/success-review')}>
          Submit Review
        </button>
      </form>
    </div>
  );
}
