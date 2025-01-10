import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import data from "./data.json";
import { Product } from "./Product";
import { Filter } from "./Filter";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Indian");

  const countries = data.meals;

  async function fetchData(country) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setItems(data.meals || []);
    } catch (error) {
      console.error("Data not found", error);
      setItems([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData(selectedCountry);
  }, [selectedCountry]);

  return (
    <div className="mt-10">
      {/* Country Filter */}
      <Filter
        countries={countries}
        selectedCountry={selectedCountry}
        onCountryChange={setSelectedCountry}
      />

      {/* Items List */}
      {loading ? (
        <Spinner />
      ) : items.length > 0 ? (
        <div className="flex justify-center flex-wrap w-full p-2 mx-auto space-y-10 space-x-5 mt-10">
          {items.map((item) => (
            <Product key={item.idMeal} item={item} />
          ))}
        </div>
      ) : (
        <div>
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};
