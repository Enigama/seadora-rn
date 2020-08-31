import React, {useState} from "react";
import {View, StyleSheet, FlatList} from "react-native";
import { CustomText } from "..//custom-text/CustomText";

const Tags = () => {
  const [tags, setTags] = useState([
    "Seadira",
    "Seadira",
    "Seadira",
    "Seadira",
    "Seadira",
    "Seadira",
    "Seadira",
    "Seadira",
    "Seadira",
    "Seadira",
    "Seadira",
    "Seadira",
  ]);

  const tagItem = ({ item }) => {
    return (
      <View style={Style.Tag}>
        <CustomText text={item} propStyle={Style.TagText} />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        horizontal={true}
        data={tags}
        renderItem={tagItem}
        keyExtractor={() => Math.random() * 100}
        contentContainerStyle={{ paddingHorizontal: 24 }}
      />
    </View>
  );
};

const Style = StyleSheet.create({
  Tag: {
    marginRight: 8,
    paddingHorizontal: 14,
    paddingVertical: 11,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  TagText: {
    fontSize: 14,
  },
});

export default Tags;
