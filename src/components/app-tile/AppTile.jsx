import React from "react";
import {StyleSheet, View, Image} from "react-native";
import {CustomText} from "../custom-text/CustomText";
import {visueltProBlack} from "../../constants/fontsC";
import {CustomButton} from "../custom-button/CustomButton";

const AppTile = ({item, style}) => {
	const handlerBuy = () => {
		console.log('init buy');
	};

	return (
		<View style={[style, Style.Tile]}>
			<Image source={item.img}
						 style={Style.Image}
			/>
			<View style={Style.Bottom}>
				<CustomText text={item.locale.name} propsStyle={Style.Name}/>
				<View style={Style.Info}>
					<CustomText text={item.prices.price} propsStyle={[Style.Bright, Style.Price]}/>
					<CustomText text={" грн."} propsStyle={[Style.Bright, Style.Currency]}/>
					<CustomText text={" (за 100 г)"} propsStyle={Style.Weight}/>
				</View>
				<CustomButton handlerTouch={handlerBuy}>
					<CustomText text={"Заказать"} propsStyle={Style.Button}/>
				</CustomButton>
			</View>
		</View>
	)
};

const Style = StyleSheet.create({
	Tile: {
		width: 312,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#EEEEEE',
		borderRadius: 8,
		overflow: 'hidden',
	},
	Image: {
		maxWidth: 312,
		height: 208,
	},
	Bottom: {
		paddingTop: 19,
		paddingHorizontal: 24,
		paddingBottom: 24,
	},
	Name: {
		marginBottom: 15,
		fontSize: 18,
		textAlign: 'center',
	},
	Info: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'baseline',
		marginBottom: 18,
	},
	Bright: {
		fontFamily: visueltProBlack
	},
	Price: {
		fontSize: 24,
	},
	Currency: {
		fontSize: 16,
	},
	Weight: {
		fontSize: 16,
	},
	Button: {
		textAlign: 'center',
		fontSize: 18,
		lineHeight: 40,
		color: '#fff',
	}
});

export default AppTile;
