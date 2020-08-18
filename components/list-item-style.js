import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ListItem = (props) => {
  return (
    <View style={styles.default}>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default ListItem;
