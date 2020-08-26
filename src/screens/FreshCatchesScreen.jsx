import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Platform, } from "react-native";
import { CustomText } from "../components/custom-text/CustomText";
import { visueltProBlack } from "../constants/fontsC";

const Tags = () => {
  return(
    <View>
      <ScrollView horizontal={true} style={{}}>
        <View style={Style.Tag}>
          <CustomText text={"Seadira"} propStyle={Style.TagText}/>
        </View>
        
        <View style={Style.Tag}>
          <CustomText text={"Seadira"} propStyle={Style.TagText}/>
        </View>
        
        <View style={Style.Tag}>
          <CustomText text={"Seadira"} propStyle={Style.TagText}/>
        </View>
        
        <View style={Style.Tag}>
          <CustomText text={"Seadira"} propStyle={Style.TagText}/>
        </View>
        
        <View style={Style.Tag}>
          <CustomText text={"Seadira"} propStyle={Style.TagText}/>
        </View>
        
        <View style={Style.Tag}>
          <CustomText text={"Seadira"} propStyle={Style.TagText}/>
        </View>
        
        <View style={Style.Tag}>
          <CustomText text={"Seadira"} propStyle={Style.TagText}/>
        </View>
        
      </ScrollView>
    </View>
  )
};

export const FreshCatchesScreen = () => {
  return (
    <View style={Style.Wrapper}>
      <CustomText
        text={"Fresh Catch"}
        fontName={visueltProBlack}
        propsStyle={[Style.Title, Style.Container]}
      />
      <Tags />
    </View>
  );
};

const Style = StyleSheet.create({
  Wrapper: {
    paddingTop: 25,
  },
  Container: {
    paddingHorizontal: 24,
  },
  Title: {
    marginBottom: 16,
    fontSize: 24,
  },

  Tag: {
    marginRight: 8,
    paddingHorizontal: 14,
    paddingVertical: 11,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  TagText: {
    fontSize: 14,
  },
});
