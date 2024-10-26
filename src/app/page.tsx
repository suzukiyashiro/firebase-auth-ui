"use client";

import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState<string>("");
  const [isSignUp, setIsSignUp] = useState<boolean>(false); 
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">
            {isSignUp ? "Sign Up" : "Log In"} with Email
          </h2>
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-3 py-2 mb-2 w-full focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-2 hover:bg-blue-600 transition">
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 hover:underline transition"
          >
            {isSignUp ? "Switch to Login" : "Switch to Sign Up"}
          </button>
          <div className="mt-4 flex items-center justify-center">
            <button className="flex items-center justify-center px-4 py-2  rounded-lg hover:bg-slate-200 transition duration-300 ease-in-out">
              <img
                src="/icons/google.svg"
                alt="Google"
                className="w-6 h-6 mr-2"
              />
              <span className="text-lg">Googleでログイン</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
