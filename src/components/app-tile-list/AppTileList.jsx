import React from "react";
import {StyleSheet, View, FlatList} from "react-native";
import AppTile from "../app-tile/AppTile";
import {CustomText} from "../custom-text/CustomText";

const AppTileList = ({products}) => {
	return (
		<View>
			{products.map(item => (<AppTile item={item}/>))}
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
	}
}

export default AppTileList;
