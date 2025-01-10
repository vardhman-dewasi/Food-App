import React from "react";

export const Product = ({item}) => {
    return (
        <div>
        <div className='h-[200px] w-60'>
        <img src={item.strMealThumb} alt='' className=' h-full w-full'></img>
      </div>

      <div>
         <p className='text-gray-700 font-semibold text-lg  truncate w-40 mt-1'>{item.strMeal}</p>
      </div>
        </div>
    )
}