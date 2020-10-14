import React, { useEffect } from "react";
import { StyleSheet, Text, ActivityIndicator } from "react-native";
import { useFonts } from "@use-expo/font";
import { base } from "../../constants/fontsC.js";

export const CustomText = ({ text, fontName, propsStyle }) => {
  const [isLoaded] = useFonts({
    InterRegular: require("../../../assets/fonts/InterRegular.ttf"), //base font for all Text component
    VisueltProBlack: require("../../../assets/fonts/VisueltProBlack.ttf"),
  });

  if (!isLoaded) return <ActivityIndicator />;
  return (
    <Text style={[{ fontFamily: fontName || base }, propsStyle]}>
      {text}
    </Text>
  );
};

const style = StyleSheet.create({});
