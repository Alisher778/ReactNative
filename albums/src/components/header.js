// Header.js file


import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={ viewStyle }>
			<Text style={ textStyle }>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#3f93f3',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		elevation: 2
	},
	textStyle: {
		fontSize: 20,
		paddingTop: 15,
		color: '#fff'
	}
};

export default Header;