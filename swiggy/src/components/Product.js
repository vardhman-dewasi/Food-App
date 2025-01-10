import React from "react";

export const Product = ({item}) => {
    return (
        <div className=" max-w-72 h-full flex flex-col items-center justify-between  hover:scale-110 transition duration-300 ease-in border rounded-lg shadow-2xl hover:shadow-black hover:shadow-2xl p-2 gap-4 mt-10">
        <div className='h-[200px] w-60'>
        <img src={item.strMealThumb} alt='' className=' h-full w-full border rounded-md'></img>
      </div>

      <div>
         <p className='text-gray-700 font-semibold text-lg  truncate w-40 mt-1'>{item.strMeal}</p>
      </div>
        </div>
    )
}