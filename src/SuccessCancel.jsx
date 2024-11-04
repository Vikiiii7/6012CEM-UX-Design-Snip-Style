import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessCancel.css"; 

export default function SuccessBooking() {
  const navigate = useNavigate(); 

  const handleBack = () => {
    navigate('/updated-booking');
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
            alt={'logo snipandstyle'} 
          />
          
        </header>
        
        <section className="success-icon-wrapper">
          <img 
            src={require('./assets/successicon.png')} 
            alt={'Success'} 
          />
        </section>
        
        <h2 className="success-message">
          Successfully Cancelled Booking!
        </h2>
      </main>
    </>
  );
}
