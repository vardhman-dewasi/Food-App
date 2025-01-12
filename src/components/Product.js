import React from "react";

// The Product component represents an individual product/item with an image, name, and random rating.
export const Product = ({ item, onClick }) => {
  // Generate a random star rating between 3 and 5 (inclusive), rounded to 1 decimal place
  const randomRating = (Math.random() * (5 - 3) + 3).toFixed(1);

  return (
    <div
      className="max-w-72 h-full flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in border rounded-lg shadow-2xl hover:shadow-black hover:shadow-2xl p-2 gap-4 mt-10"
      onClick={onClick} // Trigger the onClick handler passed as a prop when the item is clicked
    >
      {/* Image Section */}
      <div className="h-[200px] w-60">
        <img
          src={item.strMealThumb}
          alt={item.strMeal} 
          className="h-full w-full border rounded-md"
        />
      </div>

      {/* Product Details */}
      <div>
        {/* Product Name */}
        <p className="text-gray-700 font-semibold text-lg truncate w-40 mt-1">
          {item.strMeal}
        </p>

        {/* Star Rating */}
        <div className="flex justify-center items-center mt-2">
          {/* Display the random rating as text */}
          <p className="text-yellow-500 font-semibold">{randomRating}</p>
          <div className="flex ml-2">
            {/* Display the star icons based on the integer part of the randomRating */}
            {Array.from({ length: Math.floor(randomRating) }).map((_, index) => (
              <span key={index} className="text-yellow-500 text-sm">
                ★ 
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
