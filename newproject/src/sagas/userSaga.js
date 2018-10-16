import {call, put, takeLatest} from "redux-saga/effects";
import {
	GET_USERS,
	ADD_USER,
	SET_CURRENT_USER,
	GET_CURRENT_USER,
} from "../actions/types";
//
import {
 AsyncStorage
} from 'react-native';
// import api from "../api/profileApi";
// import history from "../history";
// import {receiveErrorAction} from "../actions/errorAction";
// import {receiveProfile, receiveProfiles, setProfileLoading, unsetProfileLoading} from "../actions/profileActions";
// import {setCurrentUser} from "../actions/authActions";
import {addPost, receiveUser} from "../actions/userAction";
import {USER_KEY} from "../config";

//TODO: clear error for profile
export function* watchGetUser() {
	yield takeLatest(ADD_USER, callGetUser);
}
function* callGetUser(action) {
	try {
		const users = AsyncStorage.getItem(USER_KEY);
		AsyncStorage.setItem(USER_KEY, users.push(action.payload));
		yield put(receiveUser(action.payload));
	} catch (error) {
		// yield put((error));
		console.log(error);
	}
}