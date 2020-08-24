import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { CustomText } from "../custom-text/CustomText";

export const NearestCatch = () => {
  const [freshCatches, setFreshCatches] = useState([
    {
      id: Date.now(),
      location: {
        icon: "",
        name: "",
      },
      name: "",
      points: [""],
      finishDate: null,
      deliveryDate: "",
      freshCatchePicture: "",
    },
  ]);
  return (
    <View>
      <CustomText text={"nearest catch a"} />
    </View>
  );
};
