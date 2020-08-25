import * as React from "react";
import { View, ScrollView } from "react-native";
import Intro from "../components/intro/Intro";
import { HowItsWork } from "../components/how-its-work/HowiItsWork";
import { NearestCatch } from "../components/nearest-catch/nearest-catch";

export const HomeScreen = ({navigation}) => {
  console.log(navigation, 'nav')
  return (
    <>
      <ScrollView>
        <Intro />
        <HowItsWork />
        <NearestCatch navigation={navigation}/>
      </ScrollView>
    </>
  );
};
