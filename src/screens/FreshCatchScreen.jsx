import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { CustomText } from "../components/custom-text/CustomText";
import { map, info } from "../../assets/icons/icons";
import SvgUri from "react-native-svg-uri";
import { visueltProBlack } from "../constants/fontsC";
import { Timer } from "../components/Timer/Timer";
import { Tooltip } from "react-native-elements";

const FreshCatcheScreen = ({ route }) => {
  const [tooltipHeight, setTooltipHeight] = useState(40);
  const { freshCatch } = route.params;

  const showMap = () => {};

  const getTooltipContent = (content) => {
    return (
      <View
        onLayout={(e) => setTooltipHeight(e.nativeEvent.layout.height)}
        style={Style.TooltipView}
      >
        <CustomText text={content} />
      </View>
    );
  };

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

          <View style={Style.Content}>
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

          <View>
            <CustomText
              text={"Собираем предзаказ еще:"}
              propsStyle={[Style.White, Style.PreorderText]}
            />
            <View style={Style.PreorderRow}>
              <Timer finishDate={freshCatch.finishDate} small={true} />
              <View style={Style.TooltipHolder}>
                <Tooltip
                  width={200}
                  height={tooltipHeight}
                  containerStyle={Style.Tooltip}
                  backgroundColor={Style.TooltipBackground.backgroundColor}
                  overlayColor={Style.TooltipOverlay.backgroundColor}
                  popover={getTooltipContent(freshCatch.tooltipDescription)}
                  closeOnlyOnBackdropPress={true}
                >
                  <SvgUri source={info} width={16} />
                </Tooltip>
              </View>
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
  Content: {
    marginBottom: 58,
  },
  PreorderText: {
    marginBottom: 12,
    fontSize: 14,
  },
  PreorderRow: {
    flexDirection: "row",
  },
  TooltipHolder: {
    alignSelf: "flex-start",
  },
  Tooltip: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  TooltipBackground: {
    backgroundColor: "#fff",
  },
  TooltipOverlay: {
    backgroundColor: "transparent",
  },
  TooltipView: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});

export default FreshCatcheScreen;
