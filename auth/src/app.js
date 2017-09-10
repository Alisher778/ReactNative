import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
	state = { loggedIn: null };

componentWillMount() {
	firebase.initializeApp({
    apiKey: 'AIzaSyCdxUyoQpbNnFzgXk5ph19X878V6ghaez8',
    authDomain: 'authentication-00.firebaseapp.com',
    databaseURL: 'https://authentication-00.firebaseio.com',
    projectId: 'authentication-00',
    storageBucket: 'authentication-00.appspot.com',
    messagingSenderId: '504407331189'
	});

	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			this.setState({ loggedIn: true });
		} else {
			this.setState({ loggedIn: false });
		}
	});
}

renderContent() {

	switch (this.state.loggedIn) {
		case true:
			return (
			<Button onPress={() => firebase.auth().signOut()}>
				Log Out
			</Button>
		);
		case false:
			return <LoginForm />;
		default:
			return <Spinner size='large' />;
	}		
}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<CardSection>
					{this.renderContent()}
				</CardSection>
			</View>
		);
	}
}
