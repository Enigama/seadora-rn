import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Linking,
  Platform,
  ScrollView,
} from "react-native";
import { colorTheme, colorPeach, button } from "../../baseStyle/baseStyle";
import { IS_SIGN_IN } from "../constants/authC.js";
import { CustomText } from "../components/custom-text/CustomText";
import { visueltProBlack } from "../constants/fontsC.js";
import SvgUri from "react-native-svg-uri";
import { google, facebook } from "../../assets/icons/icons";

export const AuthScreen = ({ navigation, route }) => {
  const [isSignIn, setIsSignIn] = useState(route.params.auth === IS_SIGN_IN);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retryPassword, setRetryPassword] = useState("");
  const tabText = ["Вход", "Регистрация"];
  const pageTitle = ["Войти в аккаунт", "Зарегистрируйся"];

  const togglerSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handlerEmail = (text) => {
    setEmail(text);
  };

  const handlerPassword = (text) => {
    setPassword(text);
  };

  const handlerRecovery = () => {
    console.log("handler recovery password");
  };

  const handlerAuth = () => {
    console.log("handler auth");
  };

  const googleAuth = () => {
    console.log("googleAuth");
  };

  const facebookAuth = () => {
    console.log("facebookAuth");
  };

  const showPolicy = () => {
    console.log("showPolicy");
    const url = "https://seadora.com.ua/privacy-policy";

    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: Platform.OS === "android" ? 25 : 0 }}
    >
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={[
              style.AuthHeader,
              isSignIn ? { marginBottom: 60 } : { marginBottom: 32 },
              { backgroundColor: isSignIn ? colorPeach : colorTheme },
            ]}
          >
            <View style={style.AuthTab}>
              <TouchableOpacity
                disabled={true}
                style={[style.AuthButton, { borderTopRightRadius: 8 }]}
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
                onPress={() => togglerSignIn()}
              >
                <CustomText
                  text={isSignIn ? tabText[1] : tabText[0]}
                  propsStyle={[style.AuthButtonText, style.AuthButtonTextWhite]}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.AuthBody}>
            <CustomText
              text={isSignIn ? pageTitle[0] : pageTitle[1]}
              fontName={visueltProBlack}
              propsStyle={style.AuthTitle}
            />

            {isSignIn ? (
              <>
                <View style={style.AuthInputField}>
                  <TextInput
                    onChangeText={(text) => handlerEmail(text)}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor={style.AuthInputPlaceholder.color}
                    style={style.AuthInput}
                  />
                </View>

                <View style={style.AuthInputField}>
                  <TextInput
                    onChangeText={(text) => handlerPassword(text)}
                    value={password}
                    placeholder="Пароль"
                    placeholderTextColor={style.AuthInputPlaceholder.color}
                    style={style.AuthInput}
                  />
                </View>

                <TouchableOpacity
                  onPress={() => handlerRecovery()}
                  style={style.AuthRecoveryField}
                >
                  <CustomText
                    text={"Восстановить пароль"}
                    propsStyle={style.AuthRecoveryText}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handlerAuth()}
                  style={style.AuthSignIn}
                >
                  <CustomText
                    text={"Войти"}
                    propsStyle={style.AuthSignInText}
                  />
                </TouchableOpacity>

                <CustomText
                  text={"или войти через:"}
                  propsStyle={style.AuthOrSignIn}
                />

                <View style={style.AuthSocialWrapper}>
                  <TouchableOpacity
                    onPress={() => googleAuth()}
                    style={style.AuthSocial}
                  >
                    <SvgUri source={google} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => facebookAuth()}
                    style={style.AuthSocial}
                  >
                    <SvgUri source={facebook} />
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <View style={{}}>
                <View style={style.AuthInputField}>
                  <TextInput
                    onChangeText={(text) => handlerEmail(text)}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor={style.AuthInputPlaceholder.color}
                    style={style.AuthInput}
                  />
                </View>

                <View style={style.AuthInputField}>
                  <TextInput
                    onChangeText={(text) => handlerPassword(text)}
                    value={password}
                    placeholder="Придумай пароль"
                    placeholderTextColor={style.AuthInputPlaceholder.color}
                    style={style.AuthInput}
                  />
                </View>

                <View style={style.AuthInputField}>
                  <TextInput
                    onChangeText={(text) => handlerPassword(text)}
                    value={retryPassword}
                    placeholder="Повтори пароль"
                    placeholderTextColor={style.AuthInputPlaceholder.color}
                    style={style.AuthInput}
                  />
                </View>

                <TouchableOpacity
                  onPress={() => handlerAuth()}
                  style={[style.AuthSignIn, { backgroundColor: colorPeach }]}
                >
                  <CustomText
                    text={"Зарегистрироваться"}
                    propsStyle={style.AuthSignInText}
                  />
                </TouchableOpacity>

                <CustomText
                  text={"или зарегистрируйся через:"}
                  propsStyle={style.AuthOrSignIn}
                />

                <View style={style.AuthSocialWrapper}>
                  <TouchableOpacity
                    onPress={() => googleAuth()}
                    style={style.AuthSocial}
                  >
                    <SvgUri source={google} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => facebookAuth()}
                    style={style.AuthSocial}
                  >
                    <SvgUri source={facebook} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
          {!isSignIn && (
            <View
              style={{
                paddingVertical: 21.5,
                paddingHorizontal: 24,
                borderTopWidth: 0.5,
                borderTopColor: "#eee",
              }}
            >
              <CustomText
                text={"Регистрируясь, вы принимаете"}
                propsStyle={style.AuthPolicyText}
              />

              <TouchableOpacity
                onPress={() => showPolicy()}
                style={style.AuthPolicyButton}
              >
                <CustomText
                  text={"Политику конфиденциальности"}
                  propsStyle={style.AuthPolicyText}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
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
    paddingTop: 4,
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
    flex: 1,
    paddingHorizontal: 24,
  },
  AuthTitle: {
    marginBottom: 24,
    fontSize: 24,
  },
  AuthInputField: {
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 8,
  },
  AuthInput: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
  },
  AuthInputPlaceholder: {
    color: "#a0a0a0",
  },
  AuthRecoveryField: {
    marginBottom: 50,
    alignSelf: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  AuthRecoveryText: {
    color: "#a0a0a0",
    fontSize: 14,
  },
  AuthSignIn: {
    ...button,
    marginBottom: 30,
    backgroundColor: colorTheme,
  },
  AuthSignInText: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  AuthOrSignIn: {
    fontSize: 14,
    color: "#a0a0a0",
    textAlign: "center",
  },
  AuthSocialWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  AuthSocial: {
    flexBasis: 144,
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  AuthPolicyText: {
    fontSize: 12,
    color: "#a0a0a0",
  },
  AuthPolicyButton: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignSelf: "flex-start",
  },
});
