import React, { useState, useEffect } from "react";

// The Filter component is responsible for displaying a dropdown to select a country and fetching the list of countries.
export const Filter = ({ selectedCountry, onCountryChange }) => {
  const [items, setItems] = useState([]); // State to store the list of countries

  // Function to fetch the list of countries from the API
  async function fetchData() {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json(); // Parse the JSON response
      setItems(data.meals || []); 
    } catch (error) {
      console.error('Data not found', error);
      setItems([]);
    }
  }

  // Fetch the data when the component is first mounted
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center mb-6 mt-2">
      <div className="mt-2 p-2 text-orange-600 font-bold">
        <p>Choose your favourite country's food </p>
      </div>

      {/* Dropdown for selecting a country */}
      <select
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={selectedCountry} // Set the currently selected country
        onChange={(e) => onCountryChange(e.target.value)} // Call the parent handler with the new selected value
      >
        {/* Render an option for each country */}
        {items.map((country) => (
          <option key={country.strArea} value={country.strArea}>
            {country.strArea}
          </option>
        ))}
      </select>
    </div>
  );
};
