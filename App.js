import * as React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from "./src/screens/HomeScreen";
import {colorTheme, colorPeach} from "./baseStyle/baseStyle";
import basket from './assets/icons/basket.svg';
import menu from './assets/icons/menu.svg'
import logo from './assets/logo/log-main.svg';
import SvgUri from 'react-native-svg-uri';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: Style.header,
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
					headerTitle: () => (
						<View>
							<SvgUri
								width={Style.logo.width}
								source={logo}
							/>
						</View>
					),
					headerLeft: () => (
						<View>
							<TouchableOpacity style={Style.menuButton}>
								<SvgUri
									width={Style.menuImage.width}
									source={menu}
								/>
							</TouchableOpacity>
						</View>
					),
					headerRight: () => (
						<View>
							<TouchableOpacity style={Style.cartButton}>
								<Text style={Style.cartCounter}>0</Text>
								<SvgUri
									width={Style.cartImage.width}
									source={basket}
								/>
							</TouchableOpacity>
						</View>
					)
				}}
			>
				<Stack.Screen name="Home" component={HomeScreen}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const Style = StyleSheet.create({
	header: {
		backgroundColor: colorTheme,
	},
	menuButton: {
		marginLeft: 16,
	},
	menuImage: {
		width: 24,
		height: 19,
	},
	logo: {
		width: 40,
	},
	cartButton: {
		width: 31,
		height: 29,
		marginRight: 16,
	},
	cartCounter: {
		position: 'absolute',
		top: -6,
		right: 0,
		paddingHorizontal: 5,
		paddingVertical: 2,
		backgroundColor: colorPeach,
		color: '#fff',
		fontSize: 12,
		borderRadius: 10,
		borderWidth: 1,
		textAlign: 'center',
		overflow: 'hidden',
		zIndex: 5,
	},
	cartImage: {
		width: 23,
		height: 25,
	}
});
export default App;
