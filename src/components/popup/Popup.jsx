import React, { useState } from "react";
import { View, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { CustomText } from "../custom-text/CustomText";
import { EvilIcons } from "@expo/vector-icons";
import { visueltProBlack } from "../../constants/fontsC";

const Popup = ({
  children,
  handlerClose,
  content: { title, description },
  closeButtonStyle = {},
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={Style.ModalView}>
        <View style={Style.Modal}>
          <View style={Style.Header}>
            <View style={Style.Left}>
              {title ? (
                <CustomText
                  text={title}
                  fontName={visueltProBlack}
                  propsStyle={[Style.Title]}
                />
              ) : null}
              {description ? <CustomText text={description} /> : null}
            </View>
            <TouchableOpacity
              onPress={handlerClose}
              style={[Style.CloseButton, closeButtonStyle]}
            >
              <EvilIcons name="close" size={34} color="black" />
            </TouchableOpacity>
          </View>
          <View style={Style.Main}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const Style = StyleSheet.create({
  ModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 16,
  },
  Modal: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  Left: {
    width: "90%",
  },
  CloseButton: {
    width: 28,
  },
  Title: {
    fontSize: 24,
  },
  Main: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    overflow: "hidden",
  },
});

export default Popup;
