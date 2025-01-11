//imports all dependecies
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCountry } from '../redux/slices/FilterSlice';
import { openModal, closeModal } from '../redux/slices/ModalSlice';
import Spinner from './Spinner';
import { Product } from './Product';
import { Filter } from './Filter';
import { FilterSection } from './FilterSection';
import { Modal } from './Modal';

export const Home = () => {
  const dispatch = useDispatch(); // Dispatch actions to Redux store
  const selectedCountry = useSelector((state) => state.filter.selectedCountry); // Get selected country from Redux state
  const isModalOpen = useSelector((state) => state.modal.isModalOpen); // Check if the modal is open
  const selectedId = useSelector((state) => state.modal.selectedId); // Get the ID of the selected item for the modal

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  // Fetch data based on the selected country
  async function fetchData(country) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json(); // Parse the JSON response
      setItems(data.meals || []);
    } catch (error) {
      console.error('Data not found', error); 
    }
    setLoading(false); 
  }

  // Fetch data whenever the selected country changes
  useEffect(() => {
    fetchData(selectedCountry);
  }, [selectedCountry]);

  // Handle product click to open the modal
  const handleProductClick = (id) => {
    dispatch(openModal(id)); // Dispatch action to open the modal with the selected ID
    document.body.style.overflow = 'hidden'; // Prevent background scrolling when modal is open
  };

  // Handle modal close
  const closeModalHandler = () => {
    dispatch(closeModal());
    document.body.style.overflow = 'auto'; // Restore background scrolling
  };

  return (
    <div className="mt-5">
      {/* Filter Section (e.g., search or additional filters) */}
      <FilterSection />

      {/* Country Filter */}
      <Filter
        selectedCountry={selectedCountry} // Pass current selected country
        onCountryChange={(country) => dispatch(setSelectedCountry(country))} // Dispatch action to change country
      />

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-2xl max-h-[90%] overflow-y-auto rounded-lg shadow-xl p-6">
            {/* Close Button */}
            <button
              onClick={closeModalHandler}
              className="absolute top-3 right-3 text-red-500 font-bold text-3xl"
            >
              ×
            </button>
            {/* Modal Content */}
            <Modal id={selectedId} />
          </div>
        </div>
      )}

      {/* Items List */}
      {loading ? (
        // Show a loading spinner if data is being fetched
        <Spinner />
      ) : items.length > 0 ? (
        <div className="flex justify-center flex-wrap w-full mx-auto space-x-5">
          {items.map((item) => (
            <Product
              key={item.idMeal}
              item={item} 
              onClick={() => handleProductClick(item.idMeal)} // Handle product click
            />
          ))}
        </div>
      ) : (
        // Show a message if no items are found
        <div>
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};
