import React, { useState } from "react";

export const FilterSection = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = [
    "Fast Delivery",
    "Favourites",
    "Ratings 4.0+",
    "Pure Veg",
    "Rs. 300-Rs. 600",
  ];

  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const [isSortDropdownVisible, setIsSortDropdownVisible] = useState(false);

  const toggleSortDropdown = () => {
    setIsSortDropdownVisible(!isSortDropdownVisible);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
        <div>
            <button className="bg-red-500 text-white font-bold px-4 py-2  border-orange-600 rounded-full">Apply Filters</button>
        </div>

        <div>
        <button className="bg-white text-gray-700 border-gray-300 hover:bg-orange-100 px-4 py-2 text-sm font-medium rounded-full border transition duration-300" onClick={toggleSortDropdown}>Sort By</button>
        {isSortDropdownVisible && (
          <div className="absolute mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              A-Z
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              By Area
            </button>
          </div>
        )}

        </div>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 text-sm font-medium rounded-full border transition duration-300 ${
            selectedFilters.includes(filter)
              ? "bg-orange-500 text-white border-orange-400"
              : "bg-white text-gray-700 border-gray-300 hover:bg-orange-100"
          }`}
          onClick={() => toggleFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
