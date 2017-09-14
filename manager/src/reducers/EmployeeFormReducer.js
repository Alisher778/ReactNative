import { EMPLOYEE_EDIT } from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEE_EDIT:
		    return { ...state, [action.payload.prop]: action.payload.value };	
		default:
			return state;
	}
};
