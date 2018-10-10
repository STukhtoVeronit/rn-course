/**
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

class Generate extends React.Component<props> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
				//onPress
				//onLongPress
				//onPressIn
				//onPressOut
				//-onLongPress-delayLongPress

				<TouchableWithoutFeedback onPress={() => this.props.add()}>
					<View style={styles.generate}>
						<Text>Add Number</Text>
					</View>
				</TouchableWithoutFeedback>
		);
	}
}

Generate.propTypes = {};

const styles = StyleSheet.create({
	generate: {
		alignItems: 'center',
		padding: 10,
		backgroundColor: "#00bcd4",
		width: '100%',
		marginTop: 20,
	}
});

export default Generate;