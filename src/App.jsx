import React from "react";
import Header from "./components/Header";

import FeaturedProducts from "./components/FeaturedProducts";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import HeroSection from "./components/Herosection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection/>
      <FeaturedProducts />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
