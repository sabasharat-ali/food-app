import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoriesScreen from "../screens/CategoriesScreen.js";
import FavouritesScreen from "../screens/FavoritesScreen";

import Colors from "../constants/colors.js";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);


const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-restaurant"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },
  Favourites: {
    screen: FavouritesScreen,
    navigationOptions: {
      tabBarLabel: "Favourties!",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
        );
      },
    },
  },
},

const MealsFavTabNavigator = Platform.OS === "android" ? createMaterialBottomTabNavigator(
  tabScreenConfig, {
    activeTintColor: Colors.accentColor,
    shifting: true,
}
) : createBottomTabNavigator(tabScreenConfig,
  
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);


export default createAppContainer(MealsFavTabNavigator);
