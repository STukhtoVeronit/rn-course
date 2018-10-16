import React from 'react'
import {
	View,
	Button,
	TextInput,
	StyleSheet, AsyncStorage
} from 'react-native';
import {addUser} from './actions/userAction';
import {USER_KEY} from "./config";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import Home from "./Home";
import {Navigation} from "react-native-navigation";
import {goToAuth} from "./navigation";

class SignUp extends React.Component {
	state = {
		username: '',
		password: '',
		email: '',
		phone_number: ''
	};
	onChangeText = (key, val) => {
		this.setState({[key]: val})
	};
	signUp = async () => {
		const {username, password, email, phone_number} = this.state;
		const user = {username, password, email, phone_number};

		try {

			this.props.addUser(user);
			// const users = await AsyncStorage.getItem(USER_KEY);
			// await AsyncStorage.setItem(USER_KEY, users.push(user));

			console.log('user successfully signed up!: ');
			goToAuth();
		} catch (err) {
			console.log('error signing up: ', err)
		}
	};

	render() {
		return (
				<View style={styles.container}>
					<TextInput
							style={styles.input}
							placeholder='Username'
							autoCapitalize="none"
							placeholderTextColor='white'
							onChangeText={val => this.onChangeText('username', val)}
					/>
					<TextInput
							style={styles.input}
							placeholder='Password'
							secureTextEntry={true}
							autoCapitalize="none"
							placeholderTextColor='white'
							onChangeText={val => this.onChangeText('password', val)}
					/>
					<TextInput
							style={styles.input}
							placeholder='Email'
							autoCapitalize="none"
							placeholderTextColor='white'
							onChangeText={val => this.onChangeText('email', val)}
					/>
					<TextInput
							style={styles.input}
							placeholder='Phone Number'
							autoCapitalize="none"
							placeholderTextColor='white'
							onChangeText={val => this.onChangeText('phone_number', val)}
					/>
					<Button
							title='Sign Up'
							onPress={this.signUp}
					/>
				</View>
		)
	}
}

SignUp.propType = {
	user: PropTypes.object.isRequired,
	addUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	user: state.user,
});

export default connect(mapStateToProps, {addUser})(SignUp);

const styles = StyleSheet.create({
	input: {
		width: 350,
		height: 55,
		backgroundColor: '#42A5F5',
		margin: 10,
		padding: 8,
		color: 'white',
		borderRadius: 14,
		fontSize: 18,
		fontWeight: '500',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});