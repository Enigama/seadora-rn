import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { colorTheme, colorPeach } from "../../baseStyle/baseStyle";
import { IS_SIGN_IN } from "../constants/authC.js";
import { CustomText } from "../components/custom-text/CustomText";
import { visueltBlack } from "../constants/fontsC.js";

export const AuthScreen = ({ navigation, route }) => {
  const [isSignIn, setIsSignIn] = useState(route.params.auth === IS_SIGN_IN);
  const tabText = ["Вход", "Регистрация"];
  const pageTitle = ["Войти в аккаунт", "Зарегистрируйся"];

  const handlerAuth = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <SafeAreaView>
      <View>
        <View style={style.AuthHeader}>
          <View
            style={[
              style.AuthTab,
              {
                paddingTop: 4,
                backgroundColor: isSignIn ? colorPeach : colorTheme,
              },
            ]}
          >
            <TouchableOpacity
              disabled={true}
              style={[style.AuthButton, { borderTopRightRadius: 8 }]}
              onPress={() => handlerAuth(IS_SIGN_IN)}
            >
              <CustomText
                text={isSignIn ? tabText[0] : tabText[1]}
                propsStyle={style.AuthButtonText}
              />
            </TouchableOpacity>
          </View>
          <View style={style.AuthTab}>
            <TouchableOpacity
              style={[
                style.AuthButton,
                { backgroundColor: isSignIn ? colorPeach : colorTheme },
              ]}
              onPress={() => handlerAuth()}
            >
              <CustomText
                text={isSignIn ? tabText[1] : tabText[0]}
                propsStyle={[style.AuthButtonText, style.AuthButtonTextWhite]}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.AuthBody}>
          <Text>{isSignIn ? pageTitle[0] : pageTitle[1]}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  AuthHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  AuthTab: {
    flexBasis: "50%",
  },
  AuthButton: {
    flexGrow: 1,
    flexShrink: 0,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  AuthButtonText: {
    fontSize: 16,
    lineHeight: 60,
    textAlign: "center",
  },
  AuthButtonTextWhite: {
    color: "white",
  },
  AuthBody: {
    height: "100%",
    backgroundColor: "white",
  },
});
