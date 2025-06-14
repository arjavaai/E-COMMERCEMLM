import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext';
import { OrderProvider } from './contexts/OrderContext';

// Components Import
import { 
  Header, 
  Hero, 
  SmartFormulas, 
  PrimeFormulas, 
  PopularProducts, 
  BusinessTools, 
  MobileAppSection, 
  Footer,
  AuthModal,
  CartSidebar
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
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <OrderProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
                <AuthModal />
                <CartSidebar />
              </BrowserRouter>
            </OrderProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
}

export default App;