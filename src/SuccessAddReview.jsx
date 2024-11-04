import * as React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SuccessAddReview.css"; // Direct import

export default function SuccessBooking() {
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle back navigation
  const handleBack = () => {
    navigate('/dashboard'); // Change '/dashboard' to the actual path of your Dashboard screen
  };

  return (
    <>
      <main className="success-booking">
        <header className="logo-container">
        <button className="close-button" onClick={handleBack}>
            X
          </button>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <img 
            src={require('./assets/snip&stylelogo.png')} 
            alt={'Success'} 
          />
          
        </header>
        
        <section className="success-icon-wrapper">
          <img 
            src={require('./assets/successicon.png')} 
            alt={'Success'} 
          />
        </section>
        
        <h2 className="success-message">
          Thank You for you Review!
        </h2>
      </main>
    </>
  );
}
