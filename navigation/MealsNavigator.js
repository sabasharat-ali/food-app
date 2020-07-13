import { createStackNavigator, createAppContainer } from "react-navigation";

import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoriesScreen from "../screens/CategoriesScreen.js";

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: {
    screen: MealDetailScreen,
  },
});

export default createAppContainer(MealsNavigator);
