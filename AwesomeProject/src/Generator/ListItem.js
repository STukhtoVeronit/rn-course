/**
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class ListItem extends React.Component<props> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				this.props.items.map((item, i) => (
						<TouchableOpacity
							onPress = {() => this.props.delete(i)}
							key={i}
							style={styles.listIteme}
						>
							<View>
								<Text>{item}</Text>
							</View>
						</TouchableOpacity>

				))
		)
	}
}

ListItem.propTypes = {};

const styles = StyleSheet.create({
	listIteme: {
		alignItems: 'center',
		padding: 10,
		fontSize: 50,
		backgroundColor: "#cecece",
		width: '100%',
		marginTop: 20,
	}
});

export default ListItem;