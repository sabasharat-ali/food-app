import MEALS from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals.js";

const INITIALSTATE = {
  meals: MEALS,
  filteredMeals: MEAL,
  favoriteMeals: [],
};

const mealsReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.od === action.mealId
      );
      if (existingIndex >= 0) {
      const updatedFavMeals = [...state, favoriteMeals]
        return {...state, favoriteMeals: }
      }
    default:
      return state;
  }
};

export default mealsReducer;
