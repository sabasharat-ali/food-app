import MEALS from "../../data/dummy-data";

const INITIALSTATE = {
  meals: MEALS,
  filteredMeals: MEAL,
  favoriteMeals: [],
};

const mealsReducer = (state = INITIALSTATE, action) => {
  return state;
};

export default mealsReducer;
