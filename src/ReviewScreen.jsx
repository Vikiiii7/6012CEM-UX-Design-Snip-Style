import React from 'react';
import './ReviewScreen.css';
import { useNavigate, useLocation } from 'react-router-dom';


const ReviewScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
  const reviews = [
    {
      name: 'Alex',
      service: 'Haircut & Styling',
      rating: 5.0,
      review: 'The stylist was fantastic! They really understood what I wanted and gave me the perfect cut. Will definitely come back.'
    },
    {
      name: 'Johnny',
      service: 'Shaving, Face Cleansing',
      rating: 4.0,
      review: 'It was a good shave, but the price was a bit high compared to other places I\'ve been to. Still, the quality is there.'
    },
    {
      name: 'Ronaldo C.',
      service: 'Hair Coloring, Hair Wash',
      rating: 4.5,
      review: 'Loved the color! The process was a bit long, but it was worth it. My hair feels so healthy afterward.'
    },
    {
      name: 'Aiman',
      service: 'Beard Trim and Shape',
      rating: 5.0,
      review: 'Very happy with the results. The barber shaped my beard perfectly and gave useful tips on maintenance.'
    }
  ];

  return (
    <div className="main-container">
      {/* Background text */}
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
      <div className="snip-style">
        Snip&Style
      </div>

      {/* Header */}
      <div className="shop-review">Shop Review</div>
      <p className="from-customers">From Customers!</p>

      {/* Add button */}
      <div className="add-button">
      <button className="header-button"onClick={() => navigate('/add-review')}>
        <span>+</span>
        </button>
      </div>

      {/* Reviews Container */}
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="header-row">
              <h2 className="customer-name">{review.name}</h2>
              <div className="rating-containerr">
                <span className="rating-number">{review.rating}</span>
                <span className="rating-star">★</span>
              </div>
            </div>
            <p className="service-type">Service: {review.service}</p>
            <p className="review-text">"{review.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewScreen;
