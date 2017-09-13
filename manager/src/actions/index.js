import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (password) => {
	return {
		type: PASSWORD_CHANGED,
		payload: password
	};
};

export const loginUser = (email, password) => {
	return (dispatch) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((user) => loginUserFunction(dispatch, user))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then((user) => loginUserFunction(dispatch, user))
					.catch(() => loginUserFail(dispatch));
			});
	};
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserFunction = (dispatch, user) => {
	dispatch({ type: LOGIN_USER_SUCCESS, payload: user });

	Actions.main();
};
