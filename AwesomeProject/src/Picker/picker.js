/**
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, Picker} from 'react-native';

class PickerComponent extends React.Component<props> {
	constructor(props) {
		super(props);
		this.state = {
			language: "english",
		}
	}

	render() {
		return (
				<View style={styles.inputWrapper}>
					<Text>Picker</Text>
					<Picker
						selectedValue={this.state.language}
						onValueChange={(itemValue, itemIndex) => {
							this.setState({
								language: itemValue
							})
						}}
					>
						<Picker.Item label="Spanish" value="spanish"/>
						<Picker.Item label="English" value="english"/>
					</Picker>
				</View>
		)
	}
}

PickerComponent.propTypes = {};

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

export default PickerComponent;