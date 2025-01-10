import React from "react";

export const Filter = ({ countries, selectedCountry, onCountryChange }) => {
  return (
    <div className="flex justify-center mb-6 mt-2">

      <div className="mt-2 p-2 text-orange-600 font-bold">
        <p>Select your favourite country's food </p>
      </div>
      <select
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
      >
        {countries.map((country) => (
          <option key={country.strArea} value={country.strArea}>
            {country.strArea}
          </option>
        ))}
      </select>
    </div>
  );
};
