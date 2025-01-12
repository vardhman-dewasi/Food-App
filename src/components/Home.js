// Import all dependencies and components
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCountry } from '../redux/slices/FilterSlice'; // Redux slice for managing country filter
import { openModal, closeModal } from '../redux/slices/ModalSlice'; // Redux slice for managing modal state
import Spinner from './Spinner';
import { Product } from './Product';
import { Filter } from './Filter'; 
import { FilterSection } from './FilterSection'; 
import { Modal } from './Modal'; 

// Home component- Main container that holds filter section and product items
export const Home = () => {
  const dispatch = useDispatch();

  // Redux state selectors
  const selectedCountry = useSelector((state) => state.filter.selectedCountry);
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const selectedId = useSelector((state) => state.modal.selectedId);

  // Local state for managing loading, items, and sorting
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]); // Stores fetched items
  const [sortedItems, setSortedItems] = useState([]); // Stores sorted items
  const [sortOption, setSortOption] = useState("A-Z"); // Default sorting option

  // Handles sorting changes
  const handleSortChange = (option) => {
    setSortOption(option);

    // Sorting logic based on selected option
    const sorted = [...items].sort((a, b) => {
      if (option === "A-Z") {
        return a.strMeal.localeCompare(b.strMeal); // Ascending order
      } else if (option === "Z-A") {
        return b.strMeal.localeCompare(a.strMeal); // Descending order
      }
      return 0;
    });
    setSortedItems(sorted);
  };

  // Fetches data based on the selected country
  async function fetchData(country) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      setItems(data.meals || []); // Set fetched data
      setSortedItems(data.meals || []); // Initialize sorted items
    } catch (error) {
      console.error('Data not found', error);
    }
    setLoading(false);
  }

  // Fetch data whenever the selectedCountry changes
  useEffect(() => {
    fetchData(selectedCountry);
  }, [selectedCountry]);

  // Handle click on a product to open modal
  const handleProductClick = (id) => {
    dispatch(openModal(id)); // Set modal state
    document.body.style.overflow = 'hidden'; // Disable background scrolling
  };

  // Close the modal
  const closeModalHandler = () => {
    dispatch(closeModal()); // Reset modal state
    document.body.style.overflow = 'auto'; // Re-enable background scrolling
  };

  return (
    <div className="mt-5">
      {/* Filter Section for sorting */}
      <FilterSection onSortChange={handleSortChange} />

      {/* Dropdown filter for countries */}
      <Filter
        selectedCountry={selectedCountry}
        onCountryChange={(country) => dispatch(setSelectedCountry(country))}
      />

      {/* Modal for displaying item details */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-full max-w-2xl max-h-[90%] overflow-y-auto rounded-lg shadow-xl p-6">
            {/* Close button */}
            <button
              onClick={closeModalHandler}
              className="absolute top-3 right-3 text-red-500 font-bold text-3xl"
            >
              ×
            </button>
            <Modal id={selectedId} /> {/* Modal content */}
          </div>
        </div>
      )}

      {/* List of items */}
      {loading ? (
        <Spinner /> // Show spinner during loading
      ) : sortedItems.length > 0 ? (
        <div className="flex justify-center flex-wrap w-full mx-auto space-x-5">
          {sortedItems.map((item) => (
            <Product
              key={item.idMeal} // Unique key for each product
              item={item}
              onClick={() => handleProductClick(item.idMeal)}
            />
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
