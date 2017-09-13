import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(password) {
		this.props.passwordChanged(password);
	}

	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser(email, password); 
	}

	render() {
		console.log(this.props)
		console.log(this.props.email)
		return (
			<Card>
				<CardSection>
					<Input 
						label="Email"
						placeholder="Your email"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
						autoCorrect={false}
						autoCapitalize='none'	
					/>
				</CardSection>
				<CardSection>
					<Input 
						label="Password"
						placeholder="Your password"
						secureTextEntry
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}	
					/>
				</CardSection>
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Login
					</Button>
					
				</CardSection>
				<CardSection>
					<Text style={styles.error}>
					{this.props.error}
					</Text>

				</CardSection>
			</Card>
		);
	}
}

const styles = {
	error: {
		color: 'red',
		fontSize: 18,
		flex: 1,
		alignItems: 'center',
		textAlign: 'center'
	}
}

const mapStateToProps = ({ auth }) => {
	const { email, password, error } = auth;
	return { email, password, error };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
