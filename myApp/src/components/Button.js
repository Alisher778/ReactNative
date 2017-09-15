import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Switch } from 'react-native';

export default class Button extends Component {
	constructor(props) {
		super(props);

		this.state = { text: this.props.text, switch: false, user: [] }
	}

	componentDidMount() {
		fetch('https://randomuser.me/api/')
			.then((user) => user.json())
			.then(({ results }) => this.setState({ user: results}))
			.catch((err) => console.log(err));	
	}

	onButtonPress() {
		this.setState({ text: 'STOP CALLING' })
	}

	render() {
		console.log(this.state.user)
		return (
			<View style={styles.view}>
				<TouchableHighlight onPress={this.onButtonPress.bind(this)} style={styles.button}
					underlayColor="red"
				>
					<Text>{this.state.text} {this.state.user.nat}</Text>
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
	view: {
		marginTop: 30
	},
	button: {
		backgroundColor: 'pink',
		padding: 10,
		borderRadius: 5,
	},
	switch: {
		marginTop: 30,
	}
}
