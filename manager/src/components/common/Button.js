import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={{ textAlign: 'center', color: '#fff', fontSize: 18 }}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	button: {
		
		backgroundColor: 'rgb(5, 144, 207)',
		padding: 7,
		borderRadius: 5,
		flex: 1,
		borderWidth: 1,
		borderColor: 'rgb(5, 144, 207)',
		marginTop: 10

	}
};

export { Button };
