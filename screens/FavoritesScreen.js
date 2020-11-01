import React from 'react';
import { View, Text } from 'react-native';
import {StyleSheet} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/header-button';
import MealList from '../components/meal-list';

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  
  if (favMeals.length === 0 || !favMeals) {
    <View style ={styles.content}>
      <Text>No favourites added yet!</Text>
    </View>
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FavoritesScreen;