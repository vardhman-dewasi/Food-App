import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" // Swiggy logo URL
          alt="Swiggy Logo"
          className="h-8"
        />
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-full max-w-md">
        <input
          type="text"
          placeholder="Search for restaurants, cuisines, or dishes"
          className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="button"
          className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition"
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
