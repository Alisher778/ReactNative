import firebase from 'firebase';
import { EMPLOYEE_EDIT } from './types';

export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_EDIT,
		payload: { prop, value }
	};
};

export const employeeCreate = ({ name, phone, shift }) => {
	const { currentUser } = firebase.auth();

	firebase.database().ref(`/users/${currentUser.uid}/employess`)
		.push({ name, phone, shift });
};
