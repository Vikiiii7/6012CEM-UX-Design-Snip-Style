import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './DashboardScreen.css';

const services = [
  { id: 1, name: 'All', icon: '🔍' },
  { id: 2, name: 'Shaving', icon: '✂️', price: 20 },
  { id: 3, name: 'Hair Wash', icon: '💆', price: 10 },
  { id: 4, name: 'Haircut & Styling', icon: '💇', price: 45 },
  { id: 5, name: 'Hair Coloring', icon: '🎨', price: 55 },
  { id: 6, name: 'Beard Trim & Shape', icon: '🧔', price: 15 },
];

const DashboardScreen = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleServiceClick = (service) => {
    setSelectedService(service);
    if (service.id !== 1) {
      navigate(`/booking/${service.id}`);
    }
  };

  return (
    <div className="dashboard-container">
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
      <div className="welcome-box">
        <h2>Welcome to Snip&Style app</h2>
        <p>Time to look Fresh & Sharp!</p>
        <p>Book your appointment now!</p>
      </div>
      <h3>Services</h3>
      <div className="services-scroll">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-item ${selectedService?.id === service.id ? 'selected' : ''}`}
            onClick={() => setSelectedService(service)}
          >
            <span className="service-icon">{service.icon}</span>
            <span className="service-name">{service.name}</span>
          </div>
        ))}
      </div>
      <div className="services-grid">
        {services
          .slice(1)
          .filter(service => selectedService.id === 1 || selectedService.id === service.id)
          .map((service) => (
            <div
              key={service.id}
              className={`service-grid-item ${selectedService?.id === service.id ? 'selected' : ''}`}
              onClick={() => handleServiceClick(service)}
            >
              <span className="service-grid-icon">{service.icon}</span>
              <span className="service-grid-name">{service.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DashboardScreen;
