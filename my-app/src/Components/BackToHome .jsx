// BackToHome.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BackToHome = () => {


  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };


  return (
    <button
      onClick={scrollToTop} // This scrolls to the top of the page
      className="back-home"
      aria-label="Back to Home"
      style={{ zIndex: 1000 }}
    >
      <i className="bi bi-arrow-up" />
    </button>
  );
};

export default BackToHome;
