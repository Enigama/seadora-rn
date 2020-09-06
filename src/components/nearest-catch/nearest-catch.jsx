import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { CustomText } from "../custom-text/CustomText";
import flags from "../../../assets/icons/flags.js";
import SvgUri from "react-native-svg-uri";
import bg from "./bg.jpg";
import { map } from "../../../assets/icons/icons";
import { visueltProBlack } from "../../constants/fontsC";
import { Timer } from "../Timer/Timer";
import { button, colors } from "../../../baseStyle/baseStyle";
import { useNavigation } from "@react-navigation/native";
import Popup from "../popup/Popup";
import Map from "../map/Map";

const NearestCatch = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [coordiantes, setCoordinates] = useState([]);
  const [freshCatches, setFreshCatches] = useState([
    {
      id: new Date().getTime(),
      location: {
        icon: flags.kz,
        name: "Казахстан",
        coordiantes: [
          {
            latitude: 50.5128729,
            longitude: 30.4755532,
          },
        ],
      },
      name: "Свежий улов голландских устриц",
      catchPlaceName: "Атлантический океан",
      points: [""],
      finishDate: null,
      finishDate: "1600999453 ",
      deliveryDate: "12 сентября",
      freshCatchePicture: bg,
    },

    {
      id: new Date().getTime(),
      location: {
        icon: flags.ua,
        name: "Украина",
        coordiantes: [
          {
            latitude: 50.5128729,
            longitude: 30.4755532,
          },
        ],
      },
      name: "Свежий улов голландских устриц",
      catchPlaceName: "Атлантический океан",
      points: [""],
      finishDate: null,
      finishDate: "1600999453 ",
      deliveryDate: "12 сентября",
      freshCatchePicture: bg,
    },
  ]);
  const navigation = useNavigation();
  const goToFreshCatch = () => {
    console.log(navigation);
    navigation.navigate("FresCatches");
  };

  const showMap = (title, description = "", coordinate) => {
    setCoordinates(coordinate);
    setModalContent({ title, description });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      {modalVisible ? (
        <Popup handlerClose={closeModal} content={modalContent}>
          <Map
            coordinates={coordiantes}
            propsStyle={{
              height: 400,
            }}
          />
        </Popup>
      ) : null}
      {freshCatches.map((item, i) => (
        <View style={[i % 2 === 1 ? { marginTop: 24 } : null]} key={item.id}>
          <ImageBackground style={Style.Background} source={bg}>
            <View style={Style.Body}>
              <View style={Style.Top}>
                <View style={Style.Location}>
                  <SvgUri
                    source={item.location.icon}
                    style={Style.Flag}
                    width={24}
                  />
                  <CustomText
                    text={item.location.name}
                    propsStyle={Style.Desc}
                  />
                </View>
                <TouchableOpacity
                  style={Style.Map}
                  onPress={() =>
                    showMap(
                      item.name,
                      item.catchPlaceName,
                      item.location.coordiantes
                    )
                  }
                >
                  <SvgUri source={map} />
                </TouchableOpacity>
              </View>
              <View style={Style.Content}>
                <View>
                  <CustomText
                    text={item.name}
                    fontName={visueltProBlack}
                    propsStyle={Style.Title}
                  />
                  <CustomText
                    text={item.catchPlaceName}
                    fontName={visueltProBlack}
                    propsStyle={Style.CatchPlaceName}
                  />
                </View>
                <View style={Style.Bottom}>
                  <CustomText
                    text={"Собираем предзаказ еще:"}
                    propsStyle={Style.Preorder}
                  />
                  <View style={Style.Timer}>
                    <Timer finishDate={item.finishDate} />
                  </View>
                  <View style={Style.DeliveryWrapper}>
                    <CustomText
                      text={"Доставка:"}
                      propsStyle={Style.DeliveryText}
                    />
                    <CustomText
                      text={item.deliveryDate}
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
          </ImageBackground>
        </View>
      ))}
    </View>
  );
};

const Style = StyleSheet.create({
  Background: {
    width: "100%",
    resizeMode: "cover",
  },
  Body: {
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
    marginBottom: 19,
    fontSize: 16,
    color: "white",
  },
  Content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  Preorder: {
    marginBottom: 12,
    fontSize: 14,
    color: "white",
  },
  Timer: {
    marginBottom: 18,
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
    backgroundColor: colors.peach,
  },
  ButtonText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
});

export default NearestCatch;
