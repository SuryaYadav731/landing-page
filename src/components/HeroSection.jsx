// import React from "react";
// import './HeroSection.css';


// const HeroSection = () => {
//   return (
//     <section className="hero">
//       <div className="hero-text">
//         <h1>Shop the Best Products of 2024</h1>
//         <p>Exclusive deals on top-selling products. Free shipping on all orders!</p>
//         <button className="shop-now-btn">Shop Now</button>
//       </div>
//       <div className="hero-image">
//         <img src="/assets/hero-banner.jpeg" alt="Hero" />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React, { useState, useEffect } from "react";
import './HeroSection.css';

const HeroSection = ({ title, description, imageSrc, ctaText }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Use a delay to trigger the fade-in animation
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  return (
    <section className="hero">
      <div className={`hero-overlay ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-text">
          <h1>{title || 'Shop the Best Products of 2024'}</h1>
          <p>{description || 'Exclusive deals on top-selling products. Free shipping on all orders!'}</p>
          <button className="shop-now-btn">{ctaText || 'Shop Now'}</button>
        </div>
        <div className="hero-image">
          <img src={imageSrc || '/assets/hero-banner.jpeg'} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
