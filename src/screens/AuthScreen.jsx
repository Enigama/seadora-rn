import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { colorTheme, colorPeach } from "../../baseStyle/baseStyle";

export const AuthScreen = () => {
  const oneOfColor = Math.floor(Math.random() * 10) % 2;
  return (
    <SafeAreaView>
      <View>
        <View style={style.AuthHeader}>
          <View style={style.AuthTab, {paddingTop: 5, backgroundColor: oneOfColor ? colorTheme : colorPeach}}>
            <TouchableOpacity style={style.AuthButton}>
              <Text style={style.AuthButtonText}>left</Text>
            </TouchableOpacity>
          </View>
          <View style={style.AuthTab}>
            <TouchableOpacity
              style={
                (style.AuthButton,
                oneOfColor ? style.AuthButtonPrimary : style.AuthButtonPeach)
              }
            >
              <Text style={style.AuthButtonText}>right</Text>
            </TouchableOpacity>
          </View>
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
  AuthTabPrimary: {
    backgroundColor: colorTheme,
  },
  AuthTabPeach: {
    backgroundColor: colorPeach,
  },
  AuthButton: {
    flexGrow: 1,
    flexShrink: 0,
    width: "100%",
    backgroundColor: 'white',
  },
  AuthButtonPrimary: {
    backgroundColor: colorTheme,
  },
  AuthButtonPeach: {
    backgroundColor: colorPeach,
  },
  AuthButtonText: {
    textAlign: "center",
  },
});
