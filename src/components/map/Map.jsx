import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { CustomText } from "../custom-text/CustomText";
import {
  markerCar,
  markerPlane,
  markerSeadora,
  markerRestaurant,
  markerCatch,
} from "../../../assets/icons/markers";
import SvgUri from "react-native-svg-uri";
import { colors } from "../../../baseStyle/baseStyle";

const Map = ({ propsStyle, coordinates }) => {
  console.log(coordinates, "coor");
  return (
    <View style={Style.MapView}>
      <MapView
        style={[Style.Map, propsStyle]}
        region={{
          latitude: 50.5128729,
          longitude: 30.4755532,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {coordinates
          ? coordinates.map((coordinate, index) => {
              return (
                <Marker coordinate={coordinate} key={index}>
                  <View style={Style.MarkerBody}>
                    <SvgUri
                      source={coordinate.icon ? coordinate.icon : markerCatch}
                      style={Style.MarkerIcon}
                    />
                    <View style={Style.Dot} />
                  </View>
                </Marker>
              );
            })
          : null}
      </MapView>
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
  MarkerBody: {
    alignItems: "center",
  },
  MarkerIcon: {
    marginBottom: 8,
  },
  Dot: {
    width: 6,
    height: 6,
    backgroundColor: colors.peach,
    borderRadius: 50,
  },
});

export default Map;
