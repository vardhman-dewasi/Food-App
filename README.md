# Food App

This is a React application that allows users to explore food items from different countries. The app fetches meal data from the TheMealDB API (https://www.themealdb.com/) and allows users to filter and sort meals based on country and various criteria.



## Features
- **Country-based Meal Filter**: Users can choose their favorite country's food and explore a variety of meals.
- **Filter Options**: You can apply filters like Fast Delivery, Favourites, Ratings 4.0+, Pure Veg, and Price Range.
- **Sorting**: Sort meals alphabetically (A-Z) and (Z-A).
- **Modal for Meal Details**: Click on a meal to view more details in a modal window.
- **Redux for State Management**: The app uses Redux to manage global state, including selected country and modal visibility.

## Technologies Used
- **React**: For building the UI components.
- **Redux Toolkit**: For managing global state (filters, selected country, and modal).
- **Tailwind CSS**: For styling the application.
- **TheMealDB API**: To fetch meal data based on the selected country.




## Project Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   
   git clone https://github.com/Vardaram-Frontend-Developer.git
   

2. Install dependencies:

   npm install
   or
   yarn install

3. Start the development server:
   
   npm start
   or
   yarn start

4. The app will run on (http://localhost:3000).




## Project Structure

- **`src/`**: Contains all the source code for the app.
  - **`redux/`**: Contains Redux slices and the store configuration.
  - **`components/`**: Contains React components like `Home`, `Product`, `Filter`, `Modal`, etc.
  - **`App.js`**: The main component that renders the app.
  - **`index.js`**: The entry point for the React application.



## How it Works

1. **App Initialization**: The `App` component is rendered into the DOM and wrapped with Redux `Provider` to give the app access to the Redux store.
2. **State Management**: The Redux store manages the `selectedCountry` (chosen country for the meals) and `isModalOpen` (for modal visibility). The `FilterSlice` handles the country filter and `ModalSlice` controls the modal state.
3. **Data Fetching**: On selecting a country, the app fetches meal data from TheMealDB API. It updates the UI with the list of meals based on the selected country.
4. **Sorting**: Users can sort the meals alphabetically, and the UI reflects this choice.
5. **Filter Buttons**: Users can apply additional filters such as "Fast Delivery," "Ratings 4.0+," etc.
6. **Modal**: When a user clicks on a meal, a modal window opens showing more details about the selected meal.



## Watch Live-

URL: 

## Example

### Selecting a Country
- Choose a country from the dropdown to filter meals based on the selected country's cuisine.

### Applying Filters
- You can filter the results based on criteria such as ratings, price range, and whether the meal is vegetarian.

### Sorting Meals
- Sort the meals alphabetically by clicking the "Sort By" button.

### Meal Details
- Click on a meal to open a modal showing more information about the selected meal.


## Contributing

Feel free to fork the project and submit pull requests.