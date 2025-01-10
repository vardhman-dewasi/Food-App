import React from "react";

export const Filter = ({ countries, selectedCountry, onCountryChange }) => {
  return (
    <div className="flex justify-center mb-6">
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
