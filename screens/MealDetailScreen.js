import React from "react";
import {
  ScrollView,
  Image,
  View,
  Text,
  Button,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";

import DefaultText from "../components/default-text";
import HeaderButton from "../components/header-button";
import ListItem from "../components/list-item-style";

const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
  props.navigation.setParams({ mealTitle: selectedMeal.title });
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>INGREDIENTS</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>STEPS</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as favorite!");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
});

export default MealDetailScreen;
