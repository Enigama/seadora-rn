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
          <View
            style={[
              style.AuthTab,
              {
                paddingTop: 4,
                backgroundColor: oneOfColor ? colorTheme : colorPeach,
              },
            ]}
          >
            <View style={[style.AuthButton, {borderTopRightRadius: 8}]}>
              <Text style={style.AuthButtonText}>left</Text>
            </View>
          </View>
          <View style={style.AuthTab}>
            <TouchableOpacity
              style={[
                style.AuthButton,
                { backgroundColor: oneOfColor ? colorTheme : colorPeach },
              ]}
            >
              <Text style={[style.AuthButtonText, style.AuthButtonTextWhite]}>
                right
              </Text>
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
  AuthButton: {
    flexGrow: 1,
    flexShrink: 0,
    width: "100%",
    backgroundColor: "white",
  },
  AuthButtonText: {
    fontSize: 16,
    lineHeight: 60,
    textAlign: "center",
  },
  AuthButtonTextWhite: {
    color: "white",
  },
});
