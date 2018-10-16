import {
	ADD_USER,
	GET_USERS
} from './types';

export const addUser = (user) => ({
	type: ADD_USER,
	payload: user
});

export const receiveUser = user => ({
	type: FETCH_USER,
	payload: user
});

export const getUsers = () => ({
	type: FETCH_POSTS,
	payload: {perPage, page}
});

export const receivePosts = posts => ({
	type: GET_POSTS,
	payload: posts
});
