import React from "react";
import {TouchableOpacity, StyleSheet} from "react-native";
import {colors} from "../../../baseStyle/baseStyle";

export const CustomButton = ({handlerTouch, style, children}) => {
	return (
		<TouchableOpacity onPress={() => handlerTouch()} style={[Style.ButtonDefault, style]}>
			{children ? children : null}
		</TouchableOpacity>
	)
};

const Style = StyleSheet.create({
	ButtonDefault: {
		backgroundColor: colors.peach,
		justifyContent: 'center',
		borderRadius: 8,
	}
})
