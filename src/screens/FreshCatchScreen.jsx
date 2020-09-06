import React from "react";
import { View, TouchableOpacity } from "react-native";
import { CustomText } from "../components/custom-text/CustomText";

const FreshCatcheScreen = ({ route }) => {
  const { freshCatch } = route.params;

  return (
    <View>
      <CustomText text={freshCatch.name} />
    </View>
  );
};

export default FreshCatcheScreen;
