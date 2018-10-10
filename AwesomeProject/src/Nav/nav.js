/**
 * @format
 * @flow
 */
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class Nav extends React.Component<props> {
	constructor(props) {
		super(props);

		this.state = {};

	}

	render() {
		return (
				<View style={styles.nav}>
					<Text>{this.props.nameOfApp}</Text>
				</View>
		);
	}
}

Nav.propTypes = {};

const styles = StyleSheet.create({
	nav: {
		alignItems: 'center',
		width: '100%',
		padding: 10,
		borderWidth: 2,
		borderColor: '#eaeaea',
		backgroundColor: '#dddddd',
	}
});

export default Nav;
