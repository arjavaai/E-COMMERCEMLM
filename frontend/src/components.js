import React, { useState } from 'react';

// Mock Data
const smartFormulasData = [
  {
    id: 1,
    name: "SMART LEAN PRO FORMULA",
    type: "Combo Pack",
    mrp: 8997.00,
    prime: 6999.00,
    image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb",
    color: "green"
  },
  {
    id: 2,
    name: "SMART BEYONIQUE FORMULA",
    type: "Combo Pack",
    mrp: 8700.00,
    prime: 6999.00,
    image: "https://images.unsplash.com/photo-1583564992049-a786281d6add",
    color: "blue"
  },
  {
    id: 3,
    name: "SMART WIZFAP FORMULA",
    type: "Combo Pack",
    mrp: 9537.00,
    prime: 6999.00,
    image: "https://images.pexels.com/photos/7615476/pexels-photo-7615476.jpeg",
    color: "pink"
  },
  {
    id: 4,
    name: "SMART HALE O FORMULA",
    type: "Combo Pack",
    mrp: 7998.00,
    prime: 6999.00,
    image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb",
    color: "gray"
  },
  {
    id: 5,
    name: "SMART MALE X FORMULA",
    type: "Combo Pack",
    mrp: 9000.00,
    prime: 6999.00,
    image: "https://images.unsplash.com/photo-1583564992049-a786281d6add",
    color: "blue"
  },
  {
    id: 6,
    name: "SMART FORMULA",
    type: "Combo Pack",
    mrp: 8499.00,
    prime: 6999.00,
    image: "https://images.pexels.com/photos/7615476/pexels-photo-7615476.jpeg",
    color: "blue"
  }
];

const primeFormulasData = [
  {
    id: 1,
    name: "MALE X FORMULA KIT",
    type: "Pack of 4",
    mrp: 7500.00,
    prime: 5250.00,
    image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb"
  },
  {
    id: 2,
    name: "HALE O KIT",
    type: "Pack of 4",
    mrp: 7148.00,
    prime: 5000.00,
    image: "https://images.unsplash.com/photo-1583564992049-a786281d6add"
  },
  {
    id: 3,
    name: "NEW DO COMBO",
    type: "Combo Pack",
    mrp: 4950.00,
    prime: 3500.00,
    image: "https://images.pexels.com/photos/7615476/pexels-photo-7615476.jpeg"
  },
  {
    id: 4,
    name: "HALE O",
    type: "1 Box",
    mrp: 3999.00,
    prime: 2800.00,
    image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb"
  },
  {
    id: 5,
    name: "BEYONIQUE COMBO",
    type: "Pack of 3",
    mrp: 4950.00,
    prime: 3500.00,
    image: "https://images.unsplash.com/photo-1583564992049-a786281d6add"
  }
];

const popularProductsData = [
  {
    id: 1,
    name: "WIZFAP",
    type: "1 Box",
    mrp: 1999.00,
    prime: 1299.00,
    image: "https://images.pexels.com/photos/7615476/pexels-photo-7615476.jpeg"
  },
  {
    id: 2,
    name: "ADVANCE ABCD HEALTH",
    type: "1 Box",
    mrp: 2499.00,
    prime: 1899.00,
    image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb"
  },
  {
    id: 3,
    name: "REACTIVATE",
    type: "1 Box",
    mrp: 2999.00,
    prime: 1799.00,
    image: "https://images.unsplash.com/photo-1583564992049-a786281d6add"
  },
  {
    id: 4,
    name: "LEAN PRO",
    type: "1 Box",
    mrp: 2995.00,
    prime: 1799.00,
    image: "https://images.pexels.com/photos/7615476/pexels-photo-7615476.jpeg"
  },
  {
    id: 5,
    name: "CURCUMUNITY",
    type: "1 Box",
    mrp: 1999.00,
    prime: 1000.00,
    image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb"
  },
  {
    id: 6,
    name: "MALE X FORMULA",
    type: "1 Box",
    mrp: 3999.00,
    prime: 2999.00,
    image: "https://images.unsplash.com/photo-1583564992049-a786281d6add"
  }
];

const businessToolsData = [
  {
    id: 1,
    name: "EXECUTIVE BAG",
    type: "1 Bag",
    mrp: 1699.00,
    prime: 1299.00,
    image: "https://images.pexels.com/photos/4098340/pexels-photo-4098340.jpeg"
  },
  {
    id: 2,
    name: "EXECUTIVE PEN",
    type: "1 Pen",
    mrp: 150.00,
    prime: 100.00,
    image: "https://images.pexels.com/photos/4098340/pexels-photo-4098340.jpeg"
  },
  {
    id: 3,
    name: "PRODUCT CATALOGUE",
    type: "1 Book",
    mrp: 150.00,
    prime: 120.00,
    image: "https://images.pexels.com/photos/4098340/pexels-photo-4098340.jpeg"
  }
];

// Header Component
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-xl font-bold text-gray-900">HEALTHEEK</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              PRODUCTS
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              SMART CLINIC
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              ACADEMY
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              HEALTH SERVICES
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              LOGIN
            </a>
          </nav>

          {/* Cart Icon */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6h11" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-600">PRODUCTS</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-600">SMART CLINIC</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-600">ACADEMY</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-600">HEALTH SERVICES</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-600">LOGIN</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Component
export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-teal-50 to-cyan-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                BECOME A GLOBAL
                <br />
                <span className="text-teal-600">HEALTH & WELLNESS COACH</span>
              </h1>
            </div>
            <div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105">
                JOIN NOW
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl p-8 shadow-xl">
              <img
                src="https://images.pexels.com/photos/6975771/pexels-photo-6975771.jpeg"
                alt="Health & Wellness Coach"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-sm font-semibold text-gray-800">ENCYO</div>
              <div className="text-xs text-gray-600">Advanced Health Solutions</div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-sm font-semibold text-gray-800">HALE.O</div>
              <div className="text-xs text-gray-600">Premium Health Formula</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ product, showPrimePrice = true }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 group hover:scale-105 transform transition-transform">
      <div className="aspect-square mb-4 bg-gray-50 rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div className="space-y-3">
        <h3 className="font-bold text-teal-600 text-sm uppercase tracking-wide">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm">{product.type}</p>
        
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm">MRP Price</span>
            <span className="text-gray-500 text-sm line-through">₹{product.mrp.toFixed(2)}</span>
          </div>
          {showPrimePrice && (
            <div className="flex items-center justify-between">
              <span className="text-teal-600 font-semibold text-sm">Prime Price</span>
              <span className="text-teal-600 font-bold">₹{product.prime.toFixed(2)}</span>
            </div>
          )}
        </div>
        
        <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6h11" />
          </svg>
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
};

// Smart Formulas Section
export const SmartFormulas = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Formula's</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {smartFormulasData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Prime Formulas Section
export const PrimeFormulas = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prime Formula's</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {primeFormulasData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Popular Products Section
export const PopularProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Products</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {popularProductsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Business Tools Section
export const BusinessTools = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Tools</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {businessToolsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-lg font-semibold transition-colors duration-200">
            See All Products
          </button>
        </div>
      </div>
    </section>
  );
};

// Mobile App Section
export const MobileAppSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-100 to-cyan-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Working for Your Better Health.
              <br />
              <span className="text-teal-600">Download the Healtheek Android App today!</span>
            </h2>
            <div>
              <button className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-lg font-semibold transition-colors duration-200">
                Download Now
              </button>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1596267151364-c4c190e46933"
                alt="Healtheek Mobile App"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-8">EXPLORE YOUR HEALTH</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Information Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-200 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-teal-200 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-teal-200 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-200 transition-colors">Safe And Secure</a></li>
              <li><a href="#" className="hover:text-teal-200 transition-colors">Cancellation & Refunds</a></li>
              <li><a href="#" className="hover:text-teal-200 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-teal-200 transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-teal-200 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Access Links Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Access Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-200 transition-colors">My Login</a></li>
              <li><a href="#" className="hover:text-teal-200 transition-colors">Sales Login</a></li>
              <li><a href="#" className="hover:text-teal-200 transition-colors">Stockist Login</a></li>
              <li><a href="#" className="hover:text-teal-200 transition-colors">Privacy</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Corporate Office</li>
              <li>Distributors Office</li>
              <li>Branch Office</li>
              <li>Health Help Call</li>
              <li>Health Desk USA</li>
              <li>Health Help UK- United</li>
            </ul>
          </div>
        </div>

        {/* Logo and Social Links */}
        <div className="border-t border-teal-400 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-teal-500 font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold">HEALTHEEK</span>
            </div>
            
            <div className="flex space-x-4">
              <p className="text-sm">Find us on social media:</p>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-teal-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-teal-200">
            <p>&copy; Copyright 2024 Cosmic Pvt Limited. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};