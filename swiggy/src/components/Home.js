import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import data from "./data.json";
import { Product } from "./Product";
import { Filter } from "./Filter";
import { FilterSection } from "./FilterSection";

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
    <div className="mt-5">
      <FilterSection/>
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
        <div className="flex justify-center flex-wrap w-full  mx-auto space-x-5">
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
