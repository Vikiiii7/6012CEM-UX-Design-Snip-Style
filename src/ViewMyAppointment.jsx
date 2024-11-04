import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ViewMyAppointment.css';

const bookings = [
  {
    id: 1,
    clientName: 'Messi',
    phoneNumber: '019 998 7563',
    date: '1/10/2024',
    time: '9.00 PM',
    services: [
      { name: 'Beard Trim & Shaping', price: 15 },
      { name: 'Face Cleansing', price: 10 },
    ],
    total: 25,
  },
  {
    id: 2,
    clientName: 'Messi',
    phoneNumber: '019 876 5432',
    date: '17/9/2024',
    time: '10.00 AM',
    services: [
      { name: 'Shaving', price: 20 },
      { name: 'Face Cleansing', price: 10 },
    ],
    total: 30,
  },
];

export default function ViewMyAppointment() {
  const navigate = useNavigate();
  
  const { id } = useParams();
  const booking = bookings.find((b) => b.id === parseInt(id));

  // Define button handlers for navigation
  const handleConfirmBooking = () => {
    navigate('/success-cancel');
  };

  if (!booking) {
    return <div>Booking not found</div>;
  }

  return (
    <div className="main-container">
      <span className="your-booking">Your Booking at Snip&Style</span>
      <div className="rectangle">
        <span className="booking-details">Booking Details</span>
        <div className="flex-row-e" style={{ marginTop: '35px' }}>
          <span className="client-name">Client Name:</span>
          <span className="client-name-value">{booking.clientName}</span>
        </div>
        <div className="flex-row">
          <span className="client-phone-number">Phone Number:</span>
          <span className="phone-number">{booking.phoneNumber}</span>
        </div>
        <div className="flex-row-e">
          <div className="rectangle-2">
            <span role="img" aria-label="calendar">📅</span>
            <span className="slash">{booking.date}</span>
          </div>
          <div className="rectangle-3">
            <span role="img" aria-label="clock">🕒</span>
            <span className="pm">{booking.time}</span>
          </div>
        </div>
        {booking.services.map((service, index) => (
          <div className="flex-row" key={index}>
            <span className="service-name">{service.name}</span>
            <span className="service-price">${service.price}</span>
          </div>
        ))}
        <div className="flex-row-db">
          <span className="total-amount">Total Amount (RM):</span>
          <span className="total-price">${booking.total}</span>
        </div>
        <div className="rectangle-5">
          <button className="cancel-booking"  onClick={handleConfirmBooking}>Cancel Booking</button>
        </div>
      </div>
    </div>
  );
}
