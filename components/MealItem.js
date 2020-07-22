import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

const MealItem = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onSelectMeal}>
      <View style={styles.mealItem}>
        <View style={styles.mealRow}>
          <Text>{itemData.item.title}</Text>
        </View>
        <View style={styles.mealRow}></View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  mealItem: {},
  mealRow: {
    flexDirection: "row",
  },
});

export default MealItem;
