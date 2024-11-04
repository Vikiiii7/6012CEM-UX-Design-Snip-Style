import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MyBookingScreen.css';

export default function MyBookingScreen() {
  const navigate = useNavigate();
  const location = useLocation();

  const bookings = [
    {
      id: 1,
      date: '1/10/2024',
      time: '9.00 PM',
      services: [{ name: 'Beard Trim & Shaping', price: 15 }, { name: 'Face Cleansing', price: 10 }],
      total: 25,
    },
    {
      id: 2,
      date: '17/9/2024',
      time: '10.00 AM',
      services: [{ name: 'Shaving', price: 20 }, { name: 'Face Cleansing', price: 10 }],
      total: 30,
    },
  ];

  const handleViewBooking = (id) => {
    navigate(`/view-appointment/${id}`);
  };

  return (
    <div className="booking-container">
      <div className="header">
        <button
          className={`header-button ${location.pathname === '/dashboard' ? 'selected' : ''}`}
          onClick={() => navigate('/dashboard')}
        >
          Services
        </button>
        <button
          className={`header-button ${location.pathname === '/my-bookings' ? 'selected' : ''}`}
          onClick={() => navigate('/my-bookings')}
        >
          Bookings
        </button>
        <button
          className={`header-button ${location.pathname === '/review-screen' ? 'selected' : ''}`}
          onClick={() => navigate('/review-screen')}
        >
          Reviews
        </button>
      </div>
      <h2 className="booking-title">My Bookings</h2>
      {bookings.map((booking) => (
        <div className="booking-card" key={booking.id}>
          <div className="booking-date-time">
            <span className="calendar-icon">📅</span>
            <span>{booking.date}</span>
            <span className="time-icon">🕒</span>
            <span>{booking.time}</span>
          </div>
          <div className="booking-services">
            {booking.services.map((service, index) => (
              <div className="booking-service" key={index}>
                <span className="service-name">{service.name}</span>
                <span className="service-price">${service.price}</span>
              </div>
            ))}
          </div>
          <div className="booking-total">
            <span>Total Amount (RM)</span>
            <span className="total-price">${booking.total}</span>
          </div>
          <button className="view-booking-button" onClick={() => handleViewBooking(booking.id)}>
            View Booking
          </button>
        </div>
      ))}
    </div>
  );
}
