import * as React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import bgImage from "./intro.jpg";
import { colorPeach } from "../../../baseStyle/baseStyle";

const Intro = () => {
  return (
    <>
      <View style={Style.block}>
        <Image source={bgImage} style={Style.bgImage} />
        <View style={Style.introWrapper}>
          <Text style={Style.introTitle}>Book your fish</Text>
          <Text style={Style.introDesc}>Fish-booking online</Text>
          <TouchableOpacity style={Style.fcButton}>
            <Text style={Style.fcText}>Ближайший улов</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const introHeight = 495;

const Style = StyleSheet.create({
  block: {},
  bgImage: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    resizeMode: "cover",
  },
  introWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 10,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: introHeight,
    paddingBottom: 24,
    backgroundColor: "rgba(0, 0, 0, 0.23)",
  },
  introTitle: {
    paddingHorizontal: 67,
    color: "#fff",
    fontSize: 48,
    textAlign: "center",
  },
  introDesc: {
    marginTop: 16,
    color: "#fff",
    fontSize: 24,
    textDecorationLine: "underline",
    textDecorationColor: "rgba(255, 255, 255, 0.4)",
  },
  fcButton: {
    width: 312,
    height: 48,
    marginTop: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorPeach,
    borderRadius: 8,
  },
  fcText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default Intro;
