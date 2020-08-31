import * as React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { AuthScreen } from "./src/screens/AuthScreen";
import { FreshCatchesScreen } from "./src/screens/FreshCatchesScreen";
import { IS_SIGN_IN } from "./src/constants/authC";
import { colors } from "./baseStyle/baseStyle";
import { menu, search, basket, user, logo } from "./assets/icons/icons";
import SvgUri from "react-native-svg-uri";

const Stack = createStackNavigator();

const App = () => {
  const handlerAuth = ({ navigate }) => {
    navigate("Auth");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          cardStyle: { backgroundColor: "white" }, //backgroundColor for all screens
          headerStyle: Style.header,
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: () => (
            <View style={Style.headerTitle}>
              <SvgUri width={Style.logo.width} source={logo} />
            </View>
          ),
          headerLeft: () => (
            <View style={Style.headerLeft}>
              <TouchableOpacity style={Style.menuButton}>
                <SvgUri width={Style.menuImage.width} source={menu} />
              </TouchableOpacity>

              <TouchableOpacity style={Style.searchButton}>
                <SvgUri width={Style.searchImage.width} source={search} />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={Style.headerRight}>
              <TouchableOpacity
                onPress={() => handlerAuth(navigation)}
                style={Style.auth}
              >
                <View style={Style.autWrapperValue}>
                  <Text style={Style.authValue}>268₴</Text>
                </View>
                <SvgUri width={Style.userImage.width} source={user} />
              </TouchableOpacity>

              <TouchableOpacity style={Style.cartButton}>
                <Text style={Style.cartCounter}>0</Text>
                <SvgUri width={Style.cartImage.width} source={basket} />
              </TouchableOpacity>
            </View>
          ),
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Auth"
          options={{ headerShown: false }}
          component={AuthScreen}
          initialParams={{ auth: IS_SIGN_IN }}
        />
        <Stack.Screen name="FresCatches" component={FreshCatchesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Style = StyleSheet.create({
  header: {
    backgroundColor: colors.theme,
  },
  headerTitle: {
    alignItems: "center",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuButton: {
    marginLeft: 16,
  },
  menuImage: {
    width: 24,
    height: 19,
  },
  searchButton: {
    alignItems: "center",
    marginLeft: 34,
  },
  searchImage: {
    width: 24,
  },
  logo: {
    width: 40,
  },
  headerRight: {
    flexDirection: "row",
  },
  auth: {
    position: "relative",
    maxWidth: 80,
    marginRight: 25,
  },
  autWrapperValue: {
    position: "absolute",
    top: -6,
    justifyContent: "center",
    height: 18,
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: colors.peach,
    borderRadius: 10,
    zIndex: 5,
  },
  authValue: {
    width: "100%",
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  userImage: {
    width: 24,
  },
  cartButton: {
    width: 31,
    height: 29,
    marginRight: 16,
  },
  cartCounter: {
    position: "absolute",
    top: -6,
    right: 0,
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: colors.peach,
    color: "#fff",
    fontSize: 12,
    borderRadius: 10,
    textAlign: "center",
    overflow: "hidden",
    zIndex: 5,
  },
  cartImage: {
    width: 23,
    height: 25,
  },
});
export default App;
