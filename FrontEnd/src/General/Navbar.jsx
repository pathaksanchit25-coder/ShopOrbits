import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import Logo from "../assets/images/ShopOrbitLOGO.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", search);
  };

  return (
    <nav className="w-full backdrop-blur-xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 border-b border-white/30 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={Logo}
            alt="ShopOrbit Logo"
            className="h-16 w-auto drop-shadow-xl transform transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Search Input (Desktop) */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center bg-gray-200/80 backdrop-blur-md border border-gray-400 rounded-full px-4 py-2 shadow-md focus-within:ring-2 focus-within:ring-gradient-to-r focus-within:from-blue-500 focus-within:to-purple-600"
        >
          <FiSearch className="text-blue-600 mr-2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="bg-transparent focus:outline-none text-gray-900 placeholder-gray-700 font-medium w-48"
          />
        </form>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          {["About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="relative text-gray-800 font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-600 to-purple-600 transition-all after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gradient-to-r from-blue-500 to-purple-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md hover:shadow-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
          >
            Register
          </Link>
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
              placeholder="Search..."
              className="bg-transparent focus:outline-none text-gray-900 placeholder-gray-700 font-medium w-full"
            />
          </form>

          {["About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block text-gray-800 font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-600 to-purple-600 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            to="/login"
            className="block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md hover:shadow-lg hover:from-purple-700 hover:to-blue-600 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;