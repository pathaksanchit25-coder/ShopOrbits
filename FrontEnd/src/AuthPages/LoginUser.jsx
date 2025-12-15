import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginUser = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Two-way binding handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Logged In:", formData);
    // Add API call here for login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-200">
      <div className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-xl rounded-xl p-8 w-96">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/40 border border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/40 border border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-500/80 hover:bg-blue-600 text-white font-semibold shadow-md transition-all duration-300"
          >
            Login
          </button>
          <p className="text-center">Don't have a Account? <Link to='/user/register' className="text-blue-700 cursor-pointer">Create One</Link></p>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;