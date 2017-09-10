import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

	constructor(props) {
		super(props);
		this.state = { email: '', password: '', error: '', loading: false };
	}
	

	onButtonPress() {
		
		const { email, password } = this.state;
		this.setState({ error: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));	
		});
	}


	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: 'Login Success'
		});
	}

	onLoginFail() {
		this.setState({
			error: 'Login Failed!',
			loading: false,
		});
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small" />;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Log In
			</Button>
		);
	} 


	render() {
		
		return (
			<Card>
				<CardSection>
					<Input 
						label="Email"
						placeholder="Your Email ..."
						autoCorrect={false} 
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
				<CardSection>
					<Input 
						label="Password"
						placeholder="Your Password"
						autoCorrect={false}
						secureTextEntry
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>
				<Text style={{ color: 'red', fontSize: 20, alignSelf: 'center', padding: 5, }}>
					{ this.state.error }
				</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}


export default LoginForm;
