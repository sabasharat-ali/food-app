import React from "react";
import { Platform } from "react-native";
import { HeaderButtons } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";

const CustomHeaderbutton = (props) => {
  return (
    <HeaderButtons
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : Colors.primaryColor}
    />
  );
};

export default CustomHeaderbutton;
