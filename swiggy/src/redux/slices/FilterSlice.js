import { createSlice } from '@reduxjs/toolkit';

// Initial state for the filter slice
const initialState = {
  selectedCountry: 'Indian', 
};

// Create the filter slice
const filterSlice = createSlice({
  name: 'filter', 
  initialState,
  reducers: {
   
    setSelectedCountry(state, action) {
      state.selectedCountry = action.payload;
    },
  },
});

// Export the action creator for setSelectedCountry to be used in components
export const { setSelectedCountry } = filterSlice.actions;

// Export the reducer so it can be included in the Redux store configuration
export default filterSlice.reducer;
