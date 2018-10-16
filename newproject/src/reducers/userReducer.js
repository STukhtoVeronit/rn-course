import {
	GET_USERS,
	ADD_USER,
	SET_CURRENT_USER,
	GET_CURRENT_USER, FETCH_USER,
} from "../actions/types";

const initialState = {
	users: [],
	currentUser: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_USER:
			return {
				...state,
				users: [...this.state.users, action.payload]
			};
		case GET_CURRENT_USER:
			return {
				...state
			};
		case GET_USERS:
			return {
				...state,
				posts: action.payload,
				loading: false
			};
		default:
			return state;
	}
}