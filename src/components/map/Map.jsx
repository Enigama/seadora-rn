import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";
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
  const getMarker = (markerName) => {
    switch (markerName) {
      case "markerCar":
        return markerCar;

      case "markerPlane":
        return markerPlane;

      case "markerRestaurant":
        return markerRestaurant;

      case "markerSeadora":
        return markerSeadora;

      default:
        return markerCatch;
    }
  };
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
                      source={getMarker(coordinate.icon)}
                      style={Style.MarkerIcon}
                    />
                    <View style={Style.Dot} />
                  </View>
                </Marker>
              );
            })
          : null}
        {coordinates.length > 1 ? (
          <Polygon
            coordinates={coordinates}
            strokeWidth={4}
            strokeColor={"#00B0FF"}
          />
        ) : null}
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
