import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'HOME', path: '/' },
    { 
      name: 'PRODUCTS', 
      path: '/all-bags',
      dropdown: [
        { name: 'All Bags', path: '/all-bags' },
        { name: 'School Bags', path: '/all-bags?category=school' },
        { name: 'College Bags', path: '/all-bags?category=college' },
        { name: 'Laptop Bags', path: '/all-bags?category=laptop' },
        { name: 'Hand Bags', path: '/all-bags?category=handbag' },
        { name: 'Travel Bags', path: '/all-bags?category=travel' },
      ]
    },
    { name: 'WILD ADVENTURE', path: '/wild-adventure' },
    { name: 'ABOUT JULEE', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-secondary text-white py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <span>📞 7498821933</span>
            <span className="hidden md:inline">📧 sales@juleebags.com</span>
          </div>
          <div className="text-center">
            <span>Welcome to Julee Bags - बस नाम ही काफी है</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://www.juleebags.com/images/logo11.png" 
              alt="Julee Bags Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div>
                    <Link
                      to={link.path}
                      className={`text-gray-700 hover:text-primary font-semibold text-sm transition-colors ${
                        isActive(link.path) ? 'text-primary' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                    {/* Dropdown */}
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-gray-700 hover:text-primary font-semibold text-sm transition-colors ${
                      isActive(link.path) ? 'text-primary' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className="w-full text-left py-2 text-gray-700 hover:text-primary font-semibold transition-colors flex justify-between items-center"
                    >
                      {link.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isProductsOpen ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isProductsOpen && (
                      <div className="pl-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 text-gray-700 hover:text-primary font-semibold transition-colors ${
                      isActive(link.path) ? 'text-primary' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
