import React, { useState } from "react";

const Signup = () => {
  if (localStorage.getItem("token")) {
    window.location.href = "/";
  }
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
              placeholder="Choose a username"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
              placeholder="Enter your email"
            />
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
              placeholder="Enter a password"
            />
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              id="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
              placeholder="Confirm your password"
            />
          </div>
          <div
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
            className="text-end cursor-pointer hover:underline text-blue-400 hover:text-blue-500"
          >
            Show Password
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Sign Up
          </button>
        </form>
        <div className="text-base">
          Have a FinBuddy already?{" "}
          <span
            className="cursor-pointer text-blue-500 font-semibold hover:underline"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
