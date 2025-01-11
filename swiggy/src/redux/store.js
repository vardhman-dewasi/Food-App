import { configureStore } from '@reduxjs/toolkit'; 
import filterReducer from './slices/FilterSlice'; 
import modalReducer from './slices/ModalSlice'; 

// Configure the Redux store with multiple slices
export const store = configureStore({
  reducer: {
    filter: filterReducer, // Attach the filter reducer 
    modal: modalReducer, 
  },
});
