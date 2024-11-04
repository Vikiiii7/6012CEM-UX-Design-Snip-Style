import React, { useState, useEffect } from 'react';
import './BookingScreen.css';
import { useNavigate, useParams } from 'react-router-dom';

const services = [
  { id: 1, name: 'All', icon: '🔍' },
  { id: 2, name: 'Shaving', icon: '✂️', price: 20 },
  { id: 3, name: 'Hair Wash', icon: '💆', price: 10 },
  { id: 4, name: 'Haircut & Styling', icon: '💇', price: 45 },
  { id: 5, name: 'Hair Coloring', icon: '🎨', price: 55 },
  { id: 6, name: 'Beard Trim & Shape', icon: '🧔', price: 15 },
  { id: 7, name: 'Face Cleansing', icon: '✨', price: 10 },
];

// Add this above the BookingScreen component
const serviceImages = {
  2: require('./assets/shavingimage.png'),  // Shaving
  3: require('./assets/hairwash.png'),      // Hair Wash
  4: require('./assets/haircutandstyling.png'),  // Haircut & Styling
  5: require('./assets/haircoloring.png'),   // Hair Coloring
  6: require('./assets/beardtrimming.png'),      // Beard Trim & Shape
};


const BookingScreen = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedAdditionalServices, setSelectedAdditionalServices] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const { serviceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const service = services.find((s) => s.id === parseInt(serviceId));
    setSelectedService(service);
  }, [serviceId]);

  const handleAdditionalServiceChange = (service) => {
    if (selectedAdditionalServices.includes(service)) {
      setSelectedAdditionalServices([]);
    } else {
      setSelectedAdditionalServices([service]);
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleProceedToBooking = () => {
    const queryString = new URLSearchParams({
      service: JSON.stringify({
        name: selectedService.name,
        price: selectedService.price,
      }), 
      additionalServices: JSON.stringify(
        selectedAdditionalServices.map(service => ({
          name: service,
          price: services.find(s => s.name === service)?.price || 0,
        }))
      ),
      date,
      time,
    });
    
    navigate(`/booking-summary?${queryString.toString()}`);
  };
  

  return (
    <div className="booking-container">
      <div className="booking-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
        <h2>Snip & Style</h2>
        
        {selectedService && (
          <img 
            src={serviceImages[selectedService.id] || require('./assets/group8975.png')} 
            alt={`${selectedService.name} Service`} 
          />
        )}
      </div>
      <div className="booking-detailss">
        <h3>Book a Service:</h3>
        {selectedService && (
          <div className="booking-info">
            <div className="booking-item">
              <span>{selectedService.name}</span>
              <span>${selectedService.price}</span>
            </div>
            <div className="booking-item" style={{ display: 'flex', flexDirection: 'column' }}>
              <h4>Additional Services (optional, select up to 1)</h4>
              <label>
                <input
                  type="checkbox"
                  checked={selectedAdditionalServices.includes('Haircut & Styling')}
                  onChange={() => handleAdditionalServiceChange('Haircut & Styling')}
                />
                Haircut & Styling (+$45)
              </label>
            </div>
            <div className="booking-item">
              <label>
                <input
                  type="checkbox"
                  checked={selectedAdditionalServices.includes('Hair Wash')}
                  onChange={() => handleAdditionalServiceChange('Hair Wash')}
                />
                Hair Wash (+$10)
              </label>
            </div>
            <div className="booking-item">
              <label>
                <input
                  type="checkbox"
                  checked={selectedAdditionalServices.includes('Face Cleansing')}
                  onChange={() => handleAdditionalServiceChange('Face Cleansing')}
                />
                Face Cleansing (+$10)
              </label>
            </div>
            <div className="booking-item">
              <span>Total:</span>
              <span>
                $
                {selectedService.price +
                  (selectedAdditionalServices.includes('Haircut & Styling') ? 45 : 0) +
                  (selectedAdditionalServices.includes('Hair Wash') ? 10 : 0) +
                  (selectedAdditionalServices.includes('Face Cleansing') ? 10 : 0)}
              </span>
            </div>
          </div>
        )}
        <div className="booking-form">
          <div className="booking-form-item">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" value={date} onChange={handleDateChange} />
          </div>
          <div className="booking-form-item">
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" value={time} onChange={handleTimeChange} />
          </div>
          <button className="booking-button" onClick={handleProceedToBooking}>
            Proceed to Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingScreen;
