import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiKey } from "react-icons/fi"; // icons

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    securityKey: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);

    // Reset form fields
    setFormData({
      username: "",
      email: "",
      password: "",
      securityKey: "",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-10 w-96 transform transition-all hover:scale-[1.02]">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-700 mb-6">
          Fill in your details to register
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div className="relative">
            <label className="block text-gray-800 font-medium mb-1">Username</label>
            <FiUser className="absolute left-3 top-10 text-gray-500" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/40 border border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500"
              placeholder="Enter your username"
              required
            />
          </div>

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

          {/* Security Key */}
          <div className="relative">
            <label className="block text-gray-800 font-medium mb-1">
              Security Key (Optional)
            </label>
            <FiKey className="absolute left-3 top-10 text-gray-500" />
            <input
              type="text"
              name="securityKey"
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
            Register
          </button>

          {/* Link */}
          <p className="text-center text-gray-700">
            Already have an account?{" "}
            <Link to="/user/login" className="text-blue-700 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;