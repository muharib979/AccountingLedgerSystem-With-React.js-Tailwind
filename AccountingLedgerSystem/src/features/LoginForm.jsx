import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://localhost:7081/api/SignUp/login", {
        username: formData.username, // because backend expects 'username'
        password: formData.password,
      });

      console.log("Login successful:", response.data);

      // ✅ Success হলে redirect করুন
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed! Please check your credentials.");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 shadow-lg rounded-xl bg-black">
      <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>

      <div className="flex justify-between mb-6">
        <Link
          to="/login"
          className="w-1/2 py-2 text-center bg-gradient-to-r from-blue-700 to-blue-400 text-white rounded-l-lg"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="w-1/2 py-2 text-center bg-gray-200 text-gray-700 rounded-r-lg"
        >
          Signup
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="UserName"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          required
        />

        <div className="text-right">
          <Link to="/forgot-password" className="text-blue-600 text-sm">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-blue-700 to-blue-400 text-white rounded-lg"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center text-white text-sm">
        Create an account?{" "}
        <Link to="/signup" className="text-green-600">
          Signup now
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
