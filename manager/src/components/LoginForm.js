import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	render() {
		console.log(this.props)
		console.log(this.state)
		return (
			<Card>
				<CardSection>
					<Input 
						label="Email"
						placeholder="Your email"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}	
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
					<Button>
						Login
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password
	};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
