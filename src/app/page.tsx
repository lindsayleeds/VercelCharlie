"use client";

import { useState } from "react";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [showHiMessage, setShowHiMessage] = useState(false);
  const [showBananaMessage, setShowBananaMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const handleHiClick = () => {
    setShowHiMessage(true);
    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowHiMessage(false);
    }, 3000);
  };

  const handleBananaClick = () => {
    setShowBananaMessage(true);
    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowBananaMessage(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Vercel Test App</h1>
      
      <div className="flex space-x-4">
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Say Hello
        </button>
        
        <button
          onClick={handleHiClick}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Say Hi
        </button>

        <button
          onClick={handleBananaClick}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Banana
        </button>
      </div>
      
      {showMessage && (
        <div className="mt-8 p-4 bg-green-100 text-green-800 rounded-lg shadow-md">
          <p className="text-xl font-medium">Hello!</p>
        </div>
      )}
      
      {showHiMessage && (
        <div className="mt-8 p-4 bg-purple-100 text-purple-800 rounded-lg shadow-md">
          <p className="text-xl font-medium">Hi there!</p>
        </div>
      )}
      
      {showBananaMessage && (
        <div className="mt-8 p-4 bg-yellow-100 text-yellow-800 rounded-lg shadow-md">
          <p className="text-xl font-medium">yellow</p>
        </div>
      )}
    </div>
  );
}
