import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { CustomText } from "../components/custom-text/CustomText";
import { map } from "../../assets/icons/icons";
import SvgUri from "react-native-svg-uri";
import { visueltProBlack } from "../constants/fontsC";
import { Timer } from "../components/Timer/Timer";

const FreshCatcheScreen = ({ route }) => {
  const { freshCatch } = route.params;

  const showMap = () => {};
  console.log(map, "map");

  return (
    <View>
      <ImageBackground style={Style.Background} source={require("./fcbg.jpg")}>
        <View style={Style.Info}>
          <View style={Style.Location}>
            <View style={Style.Country}>
              <SvgUri
                source={freshCatch.location.icon}
                style={Style.Flag}
                width={24}
              />
              <CustomText
                text={freshCatch.location.name}
                propsStyle={[Style.White]}
              />
            </View>
            <TouchableOpacity style={Style.Map} onPress={() => showMap()}>
              <SvgUri source={map} width={24} />
            </TouchableOpacity>
          </View>

          <View>
            <CustomText
              text={freshCatch.name}
              fontName={visueltProBlack}
              propsStyle={[Style.Headline, Style.White]}
            />
            <CustomText
              text={freshCatch.catchPlaceName}
              fontName={visueltProBlack}
              propsStyle={[Style.Description, Style.White]}
            />
            <CustomText
              text={freshCatch.catchTextSmall}
              propsStyle={[Style.Text, Style.White]}
            />
          </View>

          <View style={{}}>
            <CustomText
              text={"Собираем предзаказ еще:"}
              propsStyle={[Style.White, Style.PreorderText]}
            />
            <View>
              <Timer finishDate={freshCatch.finishDate} small={true} />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View></View>
      <View></View>
      <CustomText text={freshCatch.name} />
    </View>
  );
};

const Style = StyleSheet.create({
  Background: {
    width: "100%",
    resizeMode: "cover",
  },
  Info: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "rgba(0, 22, 58, 0.6)",
  },
  Location: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  Country: {
    flexDirection: "row",
    alignItems: "center",
  },
  White: {
    color: "#fff",
  },
  Flag: {
    marginRight: 7,
  },
  Map: {
    alignSelf: "flex-end",
  },
  Headline: {
    fontSize: 32,
  },
  Description: {
    marginBottom: 8,
    fontSize: 16,
  },
  Text: {
    fontSize: 12,
  },
  PreorderText: {
    marginBottom: 12,
    fontSize: 14,
  },
});

export default FreshCatcheScreen;
