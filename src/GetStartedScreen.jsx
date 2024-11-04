import * as React from "react";
import { useNavigate } from 'react-router-dom';

function GetStarted() {
  const navigate = useNavigate();

  return (
    <main className="landing-page">
      <header className="header">
        <img 
          src={require('./assets/group8975.png')}
          alt="Company Logo" 
          className="logo"
        />
      </header>
      <section className="content">
        <button 
          className="cta-button"
          onClick={() => navigate('/dashboard')}
          aria-label="Get Started"
        >
          Get Started
        </button>
      </section>
      <style jsx>{`
        .landing-page {
          background: #fff;
          display: flex;
          max-width: 480px;
          width: 100%;
          padding-bottom: 141px;
          flex-direction: column;
          overflow: hidden;
          margin: 0 auto;
        }

        .header {
          border-radius: 0 0 67px 67px;
          background: #83A1C0;
          display: flex;
          width: 100%;
          justify-content: center;
          padding: 86px 21px;
        }

        .logo {
          height: 402px;
          width: auto;
        }

        .content {
          display: flex;
          justify-content: center;
          margin-top: 65px;
        }

        .cta-button {
          border-radius: 24px;
          background: #C69A70;
          width: 265px;
          max-width: 100%;
          color: #000;
          text-align: center;
          padding: 29px;
          font: 800 20px Manrope, sans-serif;
          border: 1px solid #000;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .cta-button:hover {
          opacity: 0.9;
        }

        .cta-button:focus {
          outline: 2px solid #000;
          outline-offset: 2px;
        }
      `}</style>
    </main>
  );
}

export default GetStarted;
