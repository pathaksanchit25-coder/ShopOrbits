import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import Logo from "../assets/images/ShopOrbitLOGO.png";

const Footer = () => {
  return (
    <footer className="backdrop-blur-xl bg-gradient-to-r from-blue-100/40 via-purple-100/40 to-blue-100/40 border-t border-white/30 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={Logo}
            alt="ShopOrbit Logo"
            className="h-12 w-auto drop-shadow-lg mb-3"
          />
          <p className="text-gray-700 text-center md:text-left">
            ShopOrbit — Your cinematic shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
            Quick Links
          </h3>
          <div className="flex flex-col space-y-2 text-gray-800 font-medium">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link
              to="/services"
              className="hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-3">
            Follow Us
          </h3>
          <div className="flex space-x-4 text-gray-700">
            <a href="#" className="hover:text-blue-600 transition-colors">
              <FiFacebook size={22} />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <FiTwitter size={22} />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <FiInstagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/30 py-4 text-center text-gray-700 text-sm">
        © {new Date().getFullYear()} ShopOrbit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;