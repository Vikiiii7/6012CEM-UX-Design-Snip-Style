import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingSummary.css';

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.search) {
    return <div>Loading booking details...</div>;
  }

  const searchParams = new URLSearchParams(location.search);
  const selectedService = JSON.parse(searchParams.get('service') || '{}');
  const additionalServices = JSON.parse(searchParams.get('additionalServices') || '[]');
  const date = searchParams.get('date') || '';
  const time = searchParams.get('time') || '';

  const calculatedTotal =
    (selectedService.price || 0) +
    additionalServices.reduce((acc, service) => acc + (service.price || 0), 0);

  // Define button handlers for navigation
  const handleConfirmBooking = () => {
    navigate('/success-booking');
  };

  const handleCancelBooking = () => {
    navigate('/dashboard');
  };

  return (
    <div className="booking-summary-container">
      <div className="booking-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
      </div>
      <div className="booking-summary-header">
        <h2>Booking Summary</h2>
      </div>
      <div className="booking-summary-details">
        <span>Service:</span>
        <div className="booking-summary-item">
          <span>{selectedService.name}</span>
          <span>${selectedService.price}</span>
        </div>
        {additionalServices.length > 0 && (
          <>
            <h4>Additional Services:</h4>
            {additionalServices.map((service, index) => (
              <div key={index} className="booking-summary-item">
                <span>{service.name}</span>
                <span>+${service.price}</span>
              </div>
            ))}
          </>
        )}
        <div className="booking-summary-item">
          <span>Date:</span>
          <span>{date}</span>
        </div>
        <div className="booking-summary-item">
          <span>Time:</span>
          <span>{time}</span>
        </div>
        <div className="booking-summary-item">
          <span>Total:</span>
          <span>${calculatedTotal}</span>
        </div>
        <div className="booking-summary-item">
          <span>Client Name:</span>
          <input type="text" />
        </div>
        <div className="booking-summary-item">
          <span>Client Phone:</span>
          <input type="tel" />
        </div>
      </div>
      <div className="booking-summary-actions">
        <button className="booking-summary-button" onClick={handleConfirmBooking}>Confirm Booking</button>
        <button className="booking-summary-button" onClick={handleCancelBooking}>Cancel</button>
      </div>
    </div>
  );
};

export default BookingSummary;
