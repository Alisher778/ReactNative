import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SayHello extends Component {
	constructor(props) {
		super(props);

		this.state = { myName: this.props.name }
	}

	render() {
		return (
			<View>
				<Text>Hello {this.props.name} {this.state.myName}</Text>
			</View>
		);
	}
};
