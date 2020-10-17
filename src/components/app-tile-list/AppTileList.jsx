import React from "react";
import {StyleSheet, View, FlatList} from "react-native";
import AppTile from "../app-tile/AppTile";
import {CustomText} from "../custom-text/CustomText";

const AppTileList = ({products}) => {
	return (
		<View style={Style.Wrapper}>
			{products.map((item, index) => (<AppTile item={item} style={index !== 0 && Style.offsetTop}/>))}
		</View>
		// <FlatList data={products}
		// 					renderItem={AppTile}
		// 					keyExtractor={() => Math.random() * 100}
		// 					style={Style.Wrapper}
		// />
	)
};

const Style = {
	Wrapper: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 12,
	},
	offsetTop: {
		marginTop: 16,
	},
}

export default AppTileList;
