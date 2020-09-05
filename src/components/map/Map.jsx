import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = ({ propsStyle }) => {
  return (
    <View style={Style.MapView}>
      <MapView style={[Style.Map, propsStyle]}></MapView>
    </View>
  );
};

const Style = StyleSheet.create({
  MapView: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    overflow: "hidden",
  },
  Map: {
    width: "100%",
    height: "100%",
  },
});

export default Map;
