import React, { useState, useEffect } from 'react';
import { useAuth } from './contexts/AuthContext';
import { useCart } from './contexts/CartContext';
import { useProducts } from './contexts/ProductContext';
import { useOrders } from './contexts/OrderContext';
import { useNavigate } from 'react-router-dom';

// Header Component
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { currentUser, logout } = useAuth();
  const { getCartItemsCount, openCart } = useCart();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
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
              {currentUser ? (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    DASHBOARD
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    LOGOUT
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  LOGIN
                </button>
              )}
            </nav>

            {/* Cart Icon */}
            <div className="hidden md:flex items-center">
              <div className="relative cursor-pointer" onClick={openCart}>
                <svg className="w-6 h-6 text-gray-600 hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6h11" />
                </svg>
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {getCartItemsCount()}
                  </span>
                )}
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
                {currentUser ? (
                  <>
                    <button
                      onClick={() => navigate('/dashboard')}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-600"
                    >
                      DASHBOARD
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-600"
                    >
                      LOGOUT
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-600"
                  >
                    LOGIN
                  </button>
                )}
                <button
                  onClick={openCart}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-600"
                >
                  CART ({getCartItemsCount()})
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
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
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      addToCart(product);
      // Show success animation or notification
      setTimeout(() => setIsAdding(false), 1000);
    } catch (error) {
      console.error('Error adding to cart:', error);
      setIsAdding(false);
    }
  };

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
        {product.description && (
          <p className="text-gray-500 text-xs">{product.description}</p>
        )}
        
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm">MRP Price</span>
            <span className="text-gray-500 text-sm line-through">₹{product.mrp?.toFixed(2)}</span>
          </div>
          {showPrimePrice && (
            <div className="flex items-center justify-between">
              <span className="text-teal-600 font-semibold text-sm">Prime Price</span>
              <span className="text-teal-600 font-bold">₹{product.prime?.toFixed(2)}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span>Stock: {product.stockQuantity || 0}</span>
          <span className={`px-2 py-1 rounded-full text-xs ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock || isAdding}
          className={`w-full py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
            product.inStock && !isAdding
              ? 'bg-teal-500 hover:bg-teal-600 text-white transform hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isAdding ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Adding...</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6h11" />
              </svg>
              <span>Add To Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// Smart Formulas Section
export const SmartFormulas = () => {
  const { getProductsByCategory, loading } = useProducts();
  const smartProducts = getProductsByCategory('Smart Formulas');

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Formula's</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                <div className="aspect-square bg-gray-300 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded mb-2"></div>
                <div className="h-8 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Formula's</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {smartProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Prime Formulas Section
export const PrimeFormulas = () => {
  const { getProductsByCategory, loading } = useProducts();
  const primeProducts = getProductsByCategory('Prime Formulas');

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prime Formula's</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                <div className="aspect-square bg-gray-300 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded mb-2"></div>
                <div className="h-8 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prime Formula's</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {primeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Popular Products Section
export const PopularProducts = () => {
  const { getProductsByCategory, loading } = useProducts();
  const popularProducts = getProductsByCategory('Popular Products');

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                <div className="aspect-square bg-gray-300 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded mb-2"></div>
                <div className="h-8 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Products</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Business Tools Section
export const BusinessTools = () => {
  const { getProductsByCategory, loading } = useProducts();
  const businessTools = getProductsByCategory('Business Tools');

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Tools</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                <div className="aspect-square bg-gray-300 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded mb-2"></div>
                <div className="h-8 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Tools</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {businessTools.map((product) => (
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

// Authentication Modal Component
export const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login, signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Passwords do not match');
        }
        await signup(formData.email, formData.password, formData.firstName, formData.lastName);
      }
      onClose();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md font-semibold transition-colors duration-200 disabled:opacity-50"
          >
            {loading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Cart Sidebar Component
export const CartSidebar = () => {
  const { cartItems, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!currentUser) {
      alert('Please login to proceed with checkout');
      return;
    }
    closeCart();
    navigate('/checkout');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
            <button
              onClick={closeCart}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6h11" />
                </svg>
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.type}</p>
                      <p className="text-sm font-bold text-teal-600">₹{item.prime?.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total:</span>
                <span className="text-lg font-bold text-teal-600">₹{getCartTotal().toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
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