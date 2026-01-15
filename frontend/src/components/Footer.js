import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/all-bags" className="hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/wild-adventure" className="hover:text-primary transition-colors">
                  Wild Adventure
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Julee
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li className="hover:text-primary transition-colors cursor-pointer">School Bags</li>
              <li className="hover:text-primary transition-colors cursor-pointer">College Bags</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Laptop Bags</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Hand Bags</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Tote Bags</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Travel Bags</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                <a href="https://maps.app.goo.gl/8AVfpzLY2dY8EVJH9" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <span>531B, Ganesh Peth, Near Kasturi Chowk Lane,<br />Opp. Vithhal Mandir, Pune-411002,<br />Maharashtra, India</span>
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+917498821933" className="hover:text-primary transition-colors">
                  +917498821933
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:sales@juleebags.com" className="hover:text-primary transition-colors">
                  sales@juleebags.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Julee Bags. All Rights Reserved.
          </p>
          <p className="text-xs mt-2 text-gray-400">
            Manufacturer & Supplier of Quality Bags in Pune, Mumbai, Maharashtra, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
