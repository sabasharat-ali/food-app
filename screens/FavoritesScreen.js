import React from "react";
import { View, Text, StyleSheet } from "react-native";

import MealList from "../components/meal-list";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeals} navigation={props.navigation} />;
  //WE ARE PASSING PROPS.NAVIGATION BECAUSE WE ARE USING IT IN THE MEALLIST COMPONENT AND NAVIGATION IS NOT AVAILABLE IN THE CHILD COMPONENTS
};

FavoritesScreen.navigationOptions = {
  headerTitle: "YOUR FAVORITES",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
