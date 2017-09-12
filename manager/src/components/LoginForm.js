import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input } from './common';

class LoginForm extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label="Email"
						placeholder="Your email"	
					/>
				</CardSection>
				<CardSection>
					<Input 
						label="Password"
						placeholder="Your password"
						secureTextEntry	
					/>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
