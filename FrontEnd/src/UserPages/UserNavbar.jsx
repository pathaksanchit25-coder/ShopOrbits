import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiLogOut, FiShoppingCart, FiHeart } from "react-icons/fi";
import Logo from "../assets/images/ShopOrbitLOGO.png";
import axios from "axios";

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [userName, setuserName] = useState('User')
  const { id } = useParams();

  const userRole = "User";

  useEffect(() => {
    getInfo()
  }, [id])

  const getInfo = async () => {
    const response = await axios.get(`http://localhost:3000/api/info/user/${id}`, {
      withCredentials: true
    });
    setuserName(response.data.username)
  }

  const logOut = async () => {
    try {
      await axios.post("http://localhost:3000/api/auth/user/logout", {}, { withCredentials: true });
      setuserName("User");
      window.location.replace("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching products:", search);
  };

  return (
    <nav className="w-full backdrop-blur-xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 border-b border-white/30 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/home" className="flex items-center group">
          <img
            src={Logo}
            alt="ShopOrbit Logo"
            className="h-14 w-auto drop-shadow-xl transform transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Search Input (Always visible, responsive) */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-white/40 backdrop-blur-md border border-white/50 rounded-full px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400 w-1/2 sm:w-1/3 mx-2"
        >
          <FiSearch className="text-blue-700 mr-2" size={18} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="bg-transparent focus:outline-none text-gray-800 placeholder-gray-600 font-medium w-full text-sm"
          />
        </form>

        {/* User Actions + Profile (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <Link
            to="/orders"
            className="flex items-center px-4 py-2 rounded-lg bg-white/30 text-gray-900 text-sm font-medium border border-white/40 shadow-sm hover:bg-white/50 transition-all"
          >
            📦 My Orders
          </Link>

          <Link
            to="/wishlist"
            className="flex items-center px-4 py-2 rounded-lg bg-white/30 text-gray-900 text-sm font-medium border border-white/40 shadow-sm hover:bg-white/50 transition-all"
          >
            <FiHeart className="mr-2" /> Wishlist
          </Link>

          <Link
            to="/cart"
            className="flex items-center px-4 py-2 rounded-lg bg-white/30 text-gray-900 text-sm font-medium border border-white/40 shadow-sm hover:bg-white/50 transition-all"
          >
            <FiShoppingCart className="mr-2" /> Cart
          </Link>

          {/* Logout */}
          <button onClick={logOut} className="flex items-center px-4 py-2 rounded-lg bg-white/30 text-gray-900 text-sm font-medium border border-white/40 shadow-sm hover:bg-white/50 transition-all">
            <FiLogOut size={16} className="mr-1" /> Logout
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-2 ml-3">
            <div className="flex flex-col items-end">
              <span className="text-gray-900 font-semibold text-sm">{userName}</span>
              <span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-medium">
                {userRole}
              </span>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md text-sm">
              {userName.charAt(0)}
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
        <div className="md:hidden px-6 pb-6 space-y-5 bg-gradient-to-r from-blue-100/70 via-purple-100/70 to-blue-100/70 backdrop-blur-lg border-t border-white/30 shadow-lg rounded-b-xl">
          {/* User Links (Mobile) */}
          <Link
            to="/orders"
            className="flex items-center justify-center px-5 py-3 rounded-lg bg-white/30 text-gray-900 font-medium border border-white/40 shadow-sm hover:bg-white/50 transition-all"
          >
            📦 My Orders
          </Link>
          <Link
            to="/wishlist"
            className="flex items-center justify-center px-5 py-3 rounded-lg bg-white/30 text-gray-900 font-medium border border-white/40 shadow-sm hover:bg-white/50 transition-all"
          >
            <FiHeart className="mr-2" /> Wishlist
          </Link>
          <Link
            to="/cart"
            className="flex items-center justify-center px-5 py-3 rounded-lg bg-white/30 text-gray-900 font-medium border border-white/40 shadow-sm hover:bg-white/50 transition-all"
          >
            <FiShoppingCart className="mr-2" /> Cart
          </Link>

          {/* Logout Button (Mobile) */}
          <button onClick={logOut} className="flex items-center justify-center px-5 py-3 rounded-lg bg-white/30 text-gray-900 font-medium border border-white/40 shadow-sm hover:bg-white/50 transition-all">
            <FiLogOut className="mr-2" /> Logout
          </button>

          {/* User Profile (Mobile) */}
          <div className="flex items-center space-x-3 pt-5 border-t border-white/30">
            <div className="h-11 w-11 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
              {userName.charAt(0)}
            </div>
            <div>
              <span className="block text-gray-900 font-semibold">{userName}</span>
              <span className="block text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-medium">
                {userRole}
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default UserNavbar;