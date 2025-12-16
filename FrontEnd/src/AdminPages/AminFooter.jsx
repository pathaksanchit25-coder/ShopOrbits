import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const AdminFooter = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 border-t border-blue-300 backdrop-blur-md shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h4 className="text-lg font-semibold text-black">ShopOrbit Admin Panel</h4>
          <p className="text-sm text-gray-700">
            © {new Date().getFullYear()} ShopOrbit. All rights reserved.
          </p>
        </div>

        {/* Center Section - Quick Links */}
        <div className="flex space-x-6 text-sm font-medium mb-6 md:mb-0">
          <a href="/admin/dashboard" className="hover:text-blue-600 transition-colors">
            Dashboard
          </a>
          <a href="/admin/settings" className="hover:text-blue-600 transition-colors">
            Settings
          </a>
          <a href="/admin/help" className="hover:text-blue-600 transition-colors">
            Help
          </a>
        </div>

        {/* Right Section - Social + Signature */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <FiLinkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <FiTwitter size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-700">
            Built with ❤️ by Sanchit
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;