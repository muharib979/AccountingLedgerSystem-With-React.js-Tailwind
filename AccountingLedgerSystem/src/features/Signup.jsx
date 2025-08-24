import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    mobileNumber: ""
  });
const navigate = useNavigate();
  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("https://localhost:7081/api/SignUp/signup", formData);
    console.log("Signup successful:", response.data);

    // Signup successful হলে redirect করতে পারেন, যেমন:
    navigate("/home");
  } catch (error) {
    console.error("Signup failed:", error.response?.data || error.message);
    alert("Signup failed! Please check the information and try again.");
  }
};

  return (
    <div className="w-full max-w-sm mt-20 mx-auto p-6 bg-black rounded-xl shadow-md">
       <h2 className="text-2xl font-bold text-center text-white mb-6 mt-6">Registration</h2>
      <div className="flex justify-between mb-6">
        <button className="w-1/2 py-2 bg-gradient-to-r from-blue-700 to-blue-400 text-white rounded-l-lg">Signup</button>

        <button className="w-1/2 py-2 bg-gray-200 text-gray-700 rounded-r-lg">Login</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-blue-700 to-blue-400 text-white rounded-lg hover:opacity-90"
        >
          Signup
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-white">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          Login now
        </a>
      </p>
    </div>
  );
};

export default SignupForm;
