import React from "react";
import {StyleSheet, View, Image} from "react-native";
import {CustomText} from "../custom-text/CustomText";

const AppTile = ({item}) => {
	return (
		<View style={Style.Tile}>
			<Image source={item.img} style={Style.Image}/>
			<CustomText text={item.locale.name}/>
		</View>
	)
};

const Style = StyleSheet.create({
	Tile: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 8,
		overflow: 'hidden',
	},
	Image: {
		width: 312,
		height: 208,
	}
});

export default AppTile;
