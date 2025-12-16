import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiLogOut,
} from "react-icons/fi";
import Logo from "../assets/images/ShopOrbitLOGO.png";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching products/users/orders:", search);
  };

  const adminName = "Sanchit";
  const adminRole = "Super Admin";

  return (
    <nav className="w-full backdrop-blur-xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 border-b border-white/30 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Admin Panel */}
        <Link to="/admin" className="flex items-center group">
          <img
            src={Logo}
            alt="ShopOrbit Logo"
            className="h-14 w-auto drop-shadow-xl transform transition-transform duration-300 group-hover:scale-110"
          />
          <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Admin Panel
          </span>
        </Link>

        {/* Search Input (Desktop) */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center bg-gray-200/80 backdrop-blur-md border border-gray-400 rounded-full px-3 py-1.5 shadow-md focus-within:ring-2 focus-within:ring-blue-500"
        >
          <FiSearch className="text-blue-600 mr-2" size={18} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products, users, orders..."
            className="bg-transparent focus:outline-none text-gray-900 placeholder-gray-700 font-medium w-56 text-sm"
          />
        </form>

        {/* Logout Button + Profile (Desktop) */}
        <div className="hidden md:flex items-center space-x-2">
          <Link
            to="/logout"
            className="flex items-center px-3 py-1.5 rounded-lg bg-gradient-to-r from-red-500 to-pink-600 text-white text-sm font-medium shadow-md hover:shadow-lg transition-all"
          >
            <FiLogOut size={16} className="mr-1" /> Logout
          </Link>

          {/* Admin Profile */}
          <div className="flex items-center space-x-2 ml-3">
            <div className="flex flex-col items-end">
              <span className="text-gray-900 font-semibold text-sm">
                {adminName}
              </span>
              <span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-medium">
                {adminRole}
              </span>
            </div>
            <div className="h-9 w-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md text-sm">
              {adminName.charAt(0)}
            </div>
          </div>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-gradient-to-r from-blue-100/70 via-purple-100/70 to-blue-100/70 backdrop-blur-lg border-t border-white/30 shadow-lg rounded-b-xl">
          {/* Search Input (Mobile) */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-gray-200/90 backdrop-blur-md border border-gray-400 rounded-full px-4 py-2 shadow-md focus-within:ring-2 focus-within:ring-blue-500"
          >
            <FiSearch className="text-blue-600 mr-2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, users, orders..."
              className="bg-transparent focus:outline-none text-gray-900 placeholder-gray-700 font-medium w-full"
            />
          </form>

          {/* Logout Button (Mobile) */}
          <Link
            to="/logout"
            className="flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold shadow-md hover:shadow-lg transition-all"
            onClick={() => setIsOpen(false)}
          >
            <FiLogOut className="mr-2" /> Logout
          </Link>

          {/* Admin Profile (Mobile) */}
          <div className="flex items-center space-x-3 pt-4 border-t border-white/30">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
              {adminName.charAt(0)}
            </div>
            <div>
              <span className="block text-gray-900 font-semibold">{adminName}</span>
              <span className="block text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-medium">
                {adminRole}
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;