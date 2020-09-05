import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Image, Animated, Easing } from "react-native";
import { marks } from "../../../assets/icons/marks";
import SvgUri from "react-native-svg-uri";

const Marks = () => {
  const fadeAnim = useRef(new Animated.Value(-10)).current;

  const initAnimate = (delay) => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: delay 
    }).start();
  };
  return (
    <>
      <View style={Style.List}>
        {Object.values(marks).map((marker, index) => {
          return (
            <Animated.View
              key={index.toString()}
              style={{
                transform: [
                  {
                    translateY: fadeAnim,
                  },
                ],
              }}
            >
              <SvgUri
                style={{ marginLeft: index !== 0 ? 11 : 0 }}
                source={marker}
                width={62}
              />
            </Animated.View>
          )
        })}
      </View>
    </>
  );
};

const Style = StyleSheet.create({
  List: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 10,
  },
});

export default Marks;
