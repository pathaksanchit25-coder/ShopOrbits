import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiKey } from "react-icons/fi"; // icons
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    securityKey: "", // optional for admin
  });

  const [errorMessage, setErrorMessage] = useState(""); // inline error state

  const loginAuth = async () => {
    const { email, password, securityKey } = formData;

    try {
      let response;

      if (securityKey) {
        // Admin login
        response = await axios.post("http://localhost:3000/api/auth/admin/login", {
          email,
          password,
          adminID: securityKey,
        });
        console.log("Admin Login:", response.data);
        toast.success("Admin logged in successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        setTimeout(() => navigate("/admin/dashboard"), 1500);
      } else {
        // User login
        response = await axios.post("http://localhost:3000/api/auth/user/login", {
          email,
          password,
        });
        console.log("User Login:", response.data);
        toast.success("User logged in successfully!", {
          position: "top-right",
          autoClose: 3000,
        }
      
      );
        setTimeout(() => navigate("/user/home"), 1500);
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setErrorMessage("Email not registered or password incorrect.");
        toast.error("Invalid email or password.", {
          position: "top-right",
          autoClose: 4000,
        });
      } else if (err.response?.status === 403) {
        setErrorMessage("Invalid admin security key.");
        toast.error("Invalid admin security key.", {
          position: "top-right",
          autoClose: 4000,
        });
      } else {
        setErrorMessage("Login failed. Please try again.");
        toast.error("Login failed. Please try again.", {
          position: "top-right",
          autoClose: 4000,
        });
      }
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginAuth();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-10 w-96 transform transition-all hover:scale-[1.02]">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-700 mb-6">Please login to continue</p>

        {/* Inline Error */}
        {errorMessage && (
          <p className="text-red-600 text-center font-medium mb-4">
            {errorMessage}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="relative">
            <label className="block text-gray-800 font-medium mb-1">Email</label>
            <FiMail className="absolute left-3 top-10 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/40 border border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-800 font-medium mb-1">Password</label>
            <FiLock className="absolute left-3 top-10 text-gray-500" />
            <input
              type="password"
              name="password"
              autoComplete="off"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/40 border border-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-900 placeholder-gray-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Security Key (Optional for Admin) */}
          <div className="relative">
            <label className="block text-gray-800 font-medium mb-1">
              Security Key (Optional for Admin)
            </label>
            <FiKey className="absolute left-3 top-10 text-gray-500" />
            <input
              type="text"
              name="securityKey"
              autoComplete="off"
              value={formData.securityKey}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/40 border border-white/50 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-900 placeholder-gray-500"
              placeholder="Enter admin security key"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg transition-all duration-300"
          >
            Login
          </button>

          {/* Link */}
          <p className="text-center text-gray-700">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-700 font-semibold hover:underline"
            >
              Create One
            </Link>
          </p>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Login;