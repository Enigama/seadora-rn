import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { CustomText } from "../components/custom-text/CustomText";
import Marks from "../components/marks/Marks";
import flags from "../../assets/icons/flags";
import SvgUri from "react-native-svg-uri";
import bg from "./bg.jpg";
import { map } from "../../assets/icons/icons";
import { visueltProBlack } from "../constants/fontsC";
import { Timer } from "../components/Timer/Timer";
import { button, colors } from "../../baseStyle/baseStyle";
import { useNavigation } from "@react-navigation/native";
import Tags from "../components/Tags/Tags";
import Map from "../components/map/Map";
import Popup from "../components/popup/Popup";

export const FreshCatchesScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [coordiantes, setCoordinates] = useState([]);
  const [freshCatches, setFreshCatches] = useState([
    {
      id: new Date().getTime(),
      location: {
        icon: flags.ru,
        name: "Россия",
        coordiantes: [
          {
            latitude: 50.5128729,
            longitude: 30.4755532,
          },
        ],
      },
      name: "Свежий улов голландских устриц",
      catchPlaceName: "Атлантический океан",
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
      name: "Свежий улов голландских устриц 2",
      catchPlaceName: "Атлантический океан",
      finishDate: null,
      finishDate: "1600999453 ",
      deliveryDate: "12 сентября",
      freshCatchePicture: bg,
    },
  ]);
  const navigation = useNavigation();

  const goToFreshCatch = (freshCatch) => {
    navigation.navigate("FresCatch", {
      freshCatch,
    });
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
    <ScrollView style={Style.Wrapper}>
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
      <CustomText
        text={"Fresh Catch"}
        fontName={visueltProBlack}
        propsStyle={[Style.Headline, Style.Container]}
      />
      <Tags />

      <View style={Style.Catches}>
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
                      text={"Состав улова"}
                      propsStyle={Style.Preorder}
                    />
                    <Marks />
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
                      onPress={() => goToFreshCatch(item)}
                      style={[button, Style.Button]}
                    >
                      <CustomText
                        text={"Посмотреть улов"}
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
    </ScrollView>
  );
};

const Style = StyleSheet.create({
  Wrapper: {
    paddingTop: 25,
  },
  Container: {
    paddingHorizontal: 24,
  },
  Headline: {
    marginBottom: 16,
    fontSize: 24,
  },
  Catches: {
    marginTop: 16,
  },
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
