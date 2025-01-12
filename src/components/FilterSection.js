import React, { useState } from "react";

// The FilterSection component manages filters and sorting options for a product list.
export const FilterSection = ({ onSortChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]); // State for selected filters
  const [isSortDropdownVisible, setIsSortDropdownVisible] = useState(false); // State for sort dropdown visibility
  const [selectedSort, setSelectedSort] = useState("A-Z"); // State for selected sort option

  // List of available filters
  const filters = [
    "Fast Delivery",
    "Favourites",
    "Ratings 4.0+",
    "Pure Veg",
    "Rs. 300-Rs. 600",
  ];

  // Toggles the selection of a filter
  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      // If filter is already selected, remove it
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      // If filter is not selected, add it
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  // Toggles the visibility of the sort dropdown
  const toggleSortDropdown = () => {
    setIsSortDropdownVisible(!isSortDropdownVisible);
  };

  // Handles sorting selection and passes the selected sort option to the parent component
  const handleSortChange = (e) => {
    const sortOption = e.target.value;
    setSelectedSort(sortOption);
    onSortChange(sortOption); // Notify parent about the selected sort option
  };

  return (
    <div className="flex flex-wrap items-center gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Apply Filters Button */}
      <div>
        <button className="bg-red-500 text-white font-bold px-4 py-2 border-orange-600 rounded-full">
          Apply Filters
        </button>
      </div>

      {/* Sort By Dropdown */}
      <div className="relative">
        <button
          className="bg-white text-gray-700 border-gray-300 hover:bg-orange-100 px-4 py-2 text-sm font-medium rounded-full border transition duration-300"
          onClick={toggleSortDropdown}
        >
          Sort By
        </button>

        {/* Dropdown for Sorting Options */}
        {isSortDropdownVisible && (
          <div className="absolute mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            <label className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <input
                type="radio"
                name="sortOption"
                value="A-Z"
                checked={selectedSort === "A-Z"}
                onChange={handleSortChange}
                className="mr-2"
              />
              A-Z
            </label>
            <label className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <input
                type="radio"
                name="sortOption"
                value="Z-A"
                checked={selectedSort === "Z-A"}
                onChange={handleSortChange}
                className="mr-2"
              />
              Z-A
            </label>
          </div>
        )}
      </div>

      {/* Filter Buttons */}
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 text-sm font-medium rounded-full border transition duration-300 ${
            selectedFilters.includes(filter)
              ? "bg-orange-500 text-white border-orange-400"
              : "bg-white text-gray-700 border-gray-300 hover:bg-orange-100"
          }`}
          onClick={() => toggleFilter(filter)} // Toggle filter on click
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
