import React from "react";
import { View, StyleSheet } from "react-native";
import { CustomText } from "../custom-text/CustomText";
import Slick from "react-native-slick";
import SvgUri from "react-native-svg-uri";
import fisherman from "./fisherman.svg";
import plane from "./plane.svg";
import search from "./search.svg";
import fish from "./fish.svg";
import arrow from "./arrow.svg";
import { visueltProBlack } from "../../constants/fontsC";
import { colors } from "../../../baseStyle/baseStyle";

const HowItsWork = () => {
  return (
    <View style={Style.block}>
      <CustomText
        text={"Как это работает?"}
        fontName={visueltProBlack}
        propsStyle={Style.headline}
      />
      <Slick height={170} dotColor={"#e9e9e9"} activeDotColor={colors.theme}>
        <View style={Style.wrapper}>
          <View style={Style.icons}>
            <SvgUri source={fisherman} />
            <SvgUri source={arrow} />
          </View>
          <CustomText
            text={"Выбирай и бронируй:"}
            fontName={visueltProBlack}
            propsStyle={Style.title}
          />
          <CustomText
            text={"Делай предзаказ на персональный вылов рыбы со всего мира."}
            propsStyle={Style.text}
          />
        </View>

        <View style={Style.wrapper}>
          <View style={Style.icons}>
            <SvgUri source={plane} />
            <SvgUri source={arrow} />
          </View>
          <CustomText
            text={"Выбирай и бронируй:"}
            fontName={visueltProBlack}
            propsStyle={Style.title}
          />
          <CustomText
            text={
              "Именно столько, сколько ты готов употребить. No waste. Great taste!"
            }
            propsStyle={Style.text}
          />
        </View>

        <View style={Style.wrapper}>
          <View style={Style.icons}>
            <SvgUri source={search} />
            <SvgUri source={arrow} />
          </View>
          <CustomText
            text={"Отслеживай:"}
            fontName={visueltProBlack}
            propsStyle={Style.title}
          />
          <CustomText
            text={"Благодаря QR-коду, отслеживай рыбку с лодки до клиента."}
            propsStyle={Style.text}
          />
        </View>

        <View style={Style.wrapper}>
          <View style={Style.icons}>
            <SvgUri source={fish} />
            <SvgUri source={arrow} />
          </View>
          <CustomText
            text={"Получай и наслаждайся:"}
            fontName={visueltProBlack}
            propsStyle={Style.title}
          />
          <CustomText
            text={"Через 2-3 дня заказ будет бережно доставлен к тебе домой ;)"}
            propsStyle={Style.text}
          />
        </View>
      </Slick>
    </View>
  );
};

const Style = StyleSheet.create({
  block: {
    paddingTop: 27,
    backgroundColor: "#f7f7f7",
  },
  wrapper: {
    paddingHorizontal: 24,
  },
  headline: {
    marginBottom: 37,
    paddingHorizontal: 24,
    fontSize: 24,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginTop: 8,
    marginBottom: 6,
    fontSize: 18,
    color: colors.theme,
  },
  text: {
    fontSize: 14,
  },
});

export default HowItsWork;
