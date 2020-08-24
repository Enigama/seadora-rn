import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { CustomText } from "../custom-text/CustomText";
import flags from "../../../assets/icons/flags.js";
import hongKong from "./hongkong.svg";
import SvgUri from "react-native-svg-uri";
import bg from "./bg.jpg";
import { map } from "../../../assets/icons/icons";
import { visueltProBlack } from "../../constants/fontsC";
import { Timer } from "../Timer/Timer";
import { button, colorPeach } from "../../../baseStyle/baseStyle";

export const NearestCatch = () => {
  const [freshCatches, setFreshCatches] = useState([
    {
      id: Date.now(),
      location: {
        icon: flags.ru,
        name: "",
      },
      name: "",
      catchPlaceName: "",
      points: [""],
      finishDate: null,
      deliveryDate: "",
      freshCatchePicture: "",
    },
  ]);

  const goToFreshCatch = () => {};

  return (
    <View>
      <Image source={bg} style={Style.Background} />
      <View style={Style.Body}>
        <View style={Style.Top}>
          <View style={Style.Location}>
            <SvgUri source={hongKong} style={Style.Flag} width={24} />
            <CustomText text={"Гонконг"} propsStyle={Style.Desc} />
          </View>
          <TouchableOpacity style={Style.Map}>
            <SvgUri source={map} />
          </TouchableOpacity>
        </View>
        <View style={Style.Content}>
          <View>
            <CustomText
              text={"Свежий улов голландских устриц"}
              fontName={visueltProBlack}
              propsStyle={Style.Title}
            />
            <CustomText
              text={"Атлантический океан"}
              fontName={visueltProBlack}
              propsStyle={Style.CatchPlaceName}
            />
          </View>
          <View style={Style.Bottom}>
            <Timer />
            <View style={Style.DeliveryWrapper}>
              <CustomText text={"Доставка:"} propsStyle={Style.DeliveryText} />
              <CustomText
                text={"12 сентября"}
                fontName={visueltProBlack}
                propsStyle={Style.DeliveryText}
              />
            </View>
            <TouchableOpacity
              onPress={() => goToFreshCatch()}
              style={[button, Style.Button]}
            >
              <CustomText
                text={"Перейти ко фрешкетчу"}
                propsStyle={Style.ButtonText}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  Background: {
    width: "100%",
    height: 416,
    resizeMode: "cover",
  },
  Body: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
    paddingHorizontal: 24,
    paddingTop: 21,
    paddingBottom: 32,
    backgroundColor: "rgba(0, 22, 58, 0.61)",
  },
  Top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  Location: {
    flexDirection: "row",
    alignItems: "center",
  },
  Flag: {
    marginRight: 7,
  },
  Desc: {
    fontSize: 14,
    color: "white",
  },
  Title: {
    marginBottom: 24,
    fontSize: 32,
    color: "white",
  },
  CatchPlaceName: {
    fontSize: 16,
    color: "white",
  },
  Content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  DeliveryWrapper: {
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  DeliveryText: {
    marginRight: 5,
    fontSize: 14,
    color: "white",
  },
  Button: {
    backgroundColor: colorPeach,
  },
  ButtonText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
});
