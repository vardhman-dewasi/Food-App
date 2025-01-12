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
  const dispatch = useDispatch();
  const selectedCountry = useSelector((state) => state.filter.selectedCountry);
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const selectedId = useSelector((state) => state.modal.selectedId);

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [sortOption, setSortOption] = useState("A-Z");

  const handleSortChange = (option) => {
    setSortOption(option);
    // console.log("Selected Sort Option:", option);

    // Apply sorting logic
    const sorted = [...items].sort((a, b) => {
      if (option === "A-Z") {
        return a.strMeal.localeCompare(b.strMeal); // Ascending
      } else if (option === "Z-A") {
        return b.strMeal.localeCompare(a.strMeal); // Descending
      }
      return 0;
    });
    setSortedItems(sorted);
  };

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
      setItems(data.meals || []);
      setSortedItems(data.meals || []); // Initialize sortedItems with fetched data
    } catch (error) {
      console.error('Data not found', error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData(selectedCountry);
  }, [selectedCountry]);

  const handleProductClick = (id) => {
    dispatch(openModal(id));
    document.body.style.overflow = 'hidden';
  };

  const closeModalHandler = () => {
    dispatch(closeModal());
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="mt-5">
      {/* Filter Section */}
      <FilterSection onSortChange={handleSortChange} />

      {/* Country Filter */}
      <Filter
        selectedCountry={selectedCountry}
        onCountryChange={(country) => dispatch(setSelectedCountry(country))}
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-full max-w-2xl max-h-[90%] overflow-y-auto rounded-lg shadow-xl p-6">
            <button
              onClick={closeModalHandler}
              className="absolute top-3 right-3 text-red-500 font-bold text-3xl"
            >
              ×
            </button>
            <Modal id={selectedId} />
          </div>
        </div>
      )}

      {/* Items List */}
      {loading ? (
        <Spinner />
      ) : sortedItems.length > 0 ? (
        <div className="flex justify-center flex-wrap w-full mx-auto space-x-5">
          {sortedItems.map((item) => (
            <Product
              key={item.idMeal}
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
