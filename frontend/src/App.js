import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components Import
import { 
  Header, 
  Hero, 
  SmartFormulas, 
  PrimeFormulas, 
  PopularProducts, 
  BusinessTools, 
  MobileAppSection, 
  Footer 
} from './components';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SmartFormulas />
      <PrimeFormulas />
      <PopularProducts />
      <BusinessTools />
      <MobileAppSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;