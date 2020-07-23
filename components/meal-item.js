import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onSelectMeal}>
      <View style={styles.mealItem}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground
            source={{ uri: props.image }}
            style={styles.bgImage}
          />
          <Text>{props.title}</Text>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <Text>{props.duration}m</Text>
          <Text>{props.complexity.toUpperCase()}</Text>
          <Text>{props.affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "100%",
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "90%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
});

export default MealItem;
