import { EMPLOYEE_EDIT } from './types';

export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_EDIT,
		payload: { prop, value }
	};
};
