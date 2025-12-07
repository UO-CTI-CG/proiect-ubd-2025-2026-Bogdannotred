import React from "react";
import Logo from "../assets/logo.png";

export default function LoginPage() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 font-poppins min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <header className="flex justify-center mb-8 pt-6">
            <img src={Logo} alt="Student Vid Logo" className="flex justify-center" />
        </header>
      <div className="bg-blue-100 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Welcome Back
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-200">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}