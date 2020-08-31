import React, {useState, useEffect, useRef, } from "react";
import {View, StyleSheet, Image, Animated, } from "react-native";
import {marks} from "../../../assets/icons/marks";
import SvgUri from "react-native-svg-uri";

const Marks = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  })
  return(
    <>
      <View style={Style.List}>
        {
          Object.values(marks).map((marker, index) =>(
            <Animated.View style={{opacity: fadeAnim}}>
              <SvgUri style={{marginLeft: index !== 0 ? 11 : 0}} source={marker} width={62} key={marker}/>
            </Animated.View>
          ))
        }
      </View>
    </>
  )
};

const Style = StyleSheet.create({
  List: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Marks;
