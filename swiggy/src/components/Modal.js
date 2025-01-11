import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

export const Modal = ({ id }) => {
  //manages states
  const [loading, setLoading] = useState(false);
  const [itemData, setItemData] = useState(null);
  const [error, setError] = useState(null);
  const [ReadMore, setReadMore] = useState(false);
 
  //function handle readMore and showLess
 const handleReadMore = () =>{
    setReadMore((preState) => !preState)
 }

  async function fetchData(id) { //function for get data from API for selected id
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setItemData(data.meals?.[0] || null);
    } catch (error) {
      setError("Failed to fetch data. Please try again.");
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!itemData) return <p className="text-gray-500 text-center">No data available</p>;

  //extract data from itemdata
  const {
    strMeal,
    strArea,
    strCategory,
    strMealThumb,
    strYoutube,
    strInstructions,
    ...ingredients
  } = itemData;

  const ingredientList = Object.entries(ingredients)
    .filter(([key, value]) => key.startsWith("strIngredient") && value)
    .map(([_, value]) => value);

  return (
    <div className="bg-white shadow-2xl rounded-lg p-6 max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{strMeal}</h1>
      <p className="text-md text-gray-600 mb-2">Country: {strArea}</p>
      <p className="text-md text-gray-600 mb-4">Category: {strCategory}</p>

      <div className="flex justify-center space-x-6">
       <div className="mt-4">
       <img
          src={strMealThumb}
          alt={`${strMeal}`}
          className="rounded-lg max-w-full h-64 shadow-md"
        />
       </div>

        <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Ingredients:</h2>
        <ul className="list-disc list-inside text-gray-700">
          {ingredientList.map((ingredient, index) => ( //take all ingredients from list
            <li key={index} className="mb-1">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      </div>

      <p className="mb-4 mt-5">
        <span className="font-semibold">YouTube:</span>{" "}
        <a
          href={strYoutube}
          className="text-blue-500 hover:underline"
        >
          Watch Video
        </a>
      </p>
       
       {/* create a button for wrap long description */}
      <p> <h3 className="text-xl">Instructions:</h3>
        {(ReadMore === false) && strInstructions.length > 60 ? (strInstructions.slice(0, 60) + "...") : strInstructions}
        <button
          onClick={handleReadMore}
          className="text-blue-500 ml-2 hover:underline"
        >
          {ReadMore === false ? "Read More" : "Show Less"}
        </button>
      </p>
      
    </div>
  );
};

export default Modal;
