import { EMPLOYEE_EDIT, EMPLOYE_CREATE } from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEE_EDIT:
			return { ...state, [action.payload.prop]: action.payload.value };	
		case EMPLOYE_CREATE:
			return INITIAL_STATE;
		default:
			return state;
	}
};
