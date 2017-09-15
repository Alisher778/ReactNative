import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Switch } from 'react-native';

export default class Button extends Component {
	constructor(props) {
		super(props);

		this.state = { text: this.props.text, switch: false }
	}

	onButtonPress() {
		this.setState({ text: 'STOP CALLING' })
	}

	render() {
		return (
			<View>
				<TouchableHighlight onPress={this.onButtonPress.bind(this)} style={styles.button}
					underlayColor="red"
				>
					<Text>{this.state.text}</Text>
				</TouchableHighlight>
				<Switch 
					value={this.state.switch} 
					onValueChange={(value) => this.setState({ switch: this.state.switch?false:true })} 
					style={styles.switch}
				/>
			</View>
		);
	}
};

const styles = {
	button: {
		backgroundColor: 'pink',
		padding: 10,
		borderRadius: 5,
	},
	switch: {
		marginTop: 30,
	}
}
