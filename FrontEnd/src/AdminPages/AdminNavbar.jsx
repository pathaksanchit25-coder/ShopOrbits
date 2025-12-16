import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiLogOut } from "react-icons/fi";
import Logo from "../assets/images/ShopOrbitLOGO.png";
import axios from "axios";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [adminName, setAdminName] = useState("User");
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ Fetch admin info
  const getInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/info/admin/${id}`,
        { withCredentials: true }
      );
      setAdminName(response.data?.username || "User");
    } catch (err) {
      console.error("Failed to fetch admin info:", err);
      setAdminName("User");
      navigate("/");
    }
  };

  // ✅ Logout handler
  const logOut = async () => {
    try {
      await axios.post("http://localhost:3000/api/auth/admin/logout", {}, { withCredentials: true });
      setAdminName("User");
      localStorage.clear();
      window.location.replace("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  useEffect(() => {
    getInfo();
  }, [id]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching products/users/orders:", search);
  };

  const adminRole = "Admin";

  return (
    <nav className="w-full backdrop-blur-xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 border-b border-white/30 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo + Admin Panel */}
        <Link to={`/admin/${id}`} className="flex items-center group">
          <img
            src={Logo}
            alt="ShopOrbit Logo"
            className="h-14 w-auto drop-shadow-xl transform transition-transform duration-300 group-hover:scale-110"
          />
          <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Admin Panel
          </span>
        </Link>

        {/* Search Input (Always visible, responsive) */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-white/40 backdrop-blur-md border border-white/50 rounded-full px-3 py-1.5 shadow-sm focus-within:ring-2 focus-within:ring-blue-400 w-1/2 sm:w-1/3 mx-2"
        >
          <FiSearch className="text-blue-700 mr-2" size={18} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products, users, orders..."
            className="bg-transparent focus:outline-none text-gray-800 placeholder-gray-600 font-medium w-full text-sm"
          />
        </form>

        {/* Logout Button + Profile (Desktop) */}
        <div className="hidden md:flex items-center space-x-2">
          <button
            onClick={logOut}
            className="flex items-center px-3 py-1.5 rounded-lg bg-white/30 text-gray-900 text-sm font-medium border border-white/40 shadow-sm hover:bg-white/50 transition-all"
          >
            <FiLogOut size={16} className="mr-1" /> Logout
          </button>

          {/* Admin Profile */}
          {adminName && (
            <div className="flex items-center space-x-2 ml-3">
              <div className="flex flex-col items-end">
                <span className="text-gray-900 font-semibold text-sm">{adminName}</span>
                <span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-medium">
                  {adminRole}
                </span>
              </div>
              <div className="h-9 w-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md text-sm">
                {adminName.charAt(0)}
              </div>
            </div>
          )}
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
          {/* Logout Button (Mobile) */}
          <button
            onClick={() => {
              setIsOpen(false);
              logOut();
            }}
            className="flex items-center justify-center px-4 py-2 rounded-lg bg-white/30 text-gray-900 font-semibold border border-white/40 shadow-sm hover:bg-white/50 transition-all"
          >
            <FiLogOut className="mr-2" /> Logout
          </button>

          {/* Admin Profile (Mobile) */}
          {adminName && (
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
          )}
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;