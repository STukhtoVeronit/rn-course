/**
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';

class Input extends React.Component<props> {
	constructor(props) {
		super(props);
		this.state = {
			myInput: '',
			users: ['John', 'Alex', 'John', 'Alex', 'Alex', 'John', 'Alex']
		}
	}

	onChangeInput = (event, name) => {
		this.setState({[name]: event.nativeEvent.text});
	};

	onAddUser = () => {
		this.setState({users: [...this.state.users, this.state.myInput]});
		this.setState({myInput: ''});
	};

	render() {
		return (
				<View style={styles.inputWrapper}>
					<TextInput
							value={this.state.myInput}
							name={"myInput"}
							placeholder={"User name"}
							style={styles.input}
							onChange={(e) => this.onChangeInput(e, 'myInput')}
							multiline={true}
							editable={true}
							autoCapitalize={'words'}
							autoGrow={true}
					/>
					<Button
							style={styles.button}
							title={'Add User'}
							onPress={() => this.onAddUser()}
					/>
					<ScrollView>
						{
							this.state.users.map((item, i) => (
									<Text
											key={i}
											style={styles.users}
									>
										{item}
									</Text>
							))
						}
					</ScrollView>
				</View>
		)
	}
}

Input.propTypes = {};

const styles = StyleSheet.create({
	input: {
		backgroundColor: "#f2f2f2",
		width: '100%',
		borderWidth: 2,
		fontSize: 20,
		borderColor: '#d6d7da',
		marginTop: 20,
	},
	inputWrapper: {
		width: '100%',
	},
	button: {
		marginBottom: 10,
	},
	users: {
		fontSize: 40,
		borderWidth: 1,
		borderColor: '#cecece',
		padding: 10,
		margin: 10,
	}
});

export default Input;