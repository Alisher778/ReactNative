import React from 'react';
import { Text, TextInput, View } from 'react-native';


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	return (
		<View style={{ width: '100%' }}>
			<Text style={{ marginBottom: 10 }}>{label}</Text>
			<TextInput 
			 	placeholder={placeholder} 
			 	style={styles.inputStyle} 
			 	secureTextEntry={secureTextEntry}
			 	autoCapitalize="none"
			 	onChangeText={ onChangeText }
			/>
		</View>
	);
};

const styles = {
	inputStyle: { 
		height: 35, 
		width: '100%', 
		fontSize: 18, 
		lineHeight: 1.65, 
		borderColor: '#ddd', 
		borderWidth: 1, 
		padding: 5, 
		borderRadius: 5 
	}
};

export { Input };
