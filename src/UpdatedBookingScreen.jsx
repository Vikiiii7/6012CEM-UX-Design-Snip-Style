import React from 'react';
import {useNavigate} from 'react-router-dom';
import './UpdatedBookingScreen.css';

export default function UpdatedBookingScreen() {

    const navigate = useNavigate(); 
  
  const bookings = [
    {
      id: 1,
      date: '17/9/2024',
      time: '10.00 AM',
      services: [{ name: 'Shaving', price: 20 }, { name: 'Face Cleansing', price: 10 }],
      total: 30,
    },
  ];

  const handleBack = () => {
    navigate('/dashboard'); // Change '/dashboard' to the actual path of your Dashboard screen
  };


  return (
    <div className="booking-container">
        <button className="close-button" onClick={handleBack}>
            X
          </button>
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
          <button className="view-booking-button">
            View Booking
          </button>
        </div>
      ))}
    </div>
  );
}
