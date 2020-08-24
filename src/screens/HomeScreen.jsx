import * as React from "react";
import { View, ScrollView } from "react-native";
import Intro from "../components/intro/Intro";
import { HowItsWork } from "../components/how-its-work/HowiItsWork";

export const HomeScreen = () => {
  return (
    <>
      <ScrollView>
        <Intro />
        <HowItsWork />
      </ScrollView>
    </>
  );
};
