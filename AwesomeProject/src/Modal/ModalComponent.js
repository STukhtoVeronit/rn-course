//ModalComponent
/**
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, Picker, Button, Modal} from 'react-native';

class ModalComponent extends React.Component<props> {
	constructor(props) {
		super(props);
		this.state = {
			modal:false
		}
	}

	handleModal = () => {
		this.setState({
			modal: !this.state.modal
		})
	};

	render() {
		return (
				<View style={styles.wrapper}>
					<Button
						title="Open Modal"
						onPress={()=> this.handleModal()}
						style={styles.button}
						/>

					<Modal
						visible={this.state.modal}
						animationType={'slide'}
						onShow={()=>alert('onShow modal')}
						onRequestClose={() => alert("Modal are closing")}
					>
						<View style={{backgroundColor: '#ee3333'}}>
							<Text>Modal</Text>
							<Button
									title="Close modal"
									onPress={() => this.handleModal()}/>
						</View>

					</Modal>

				</View>
		)
	}
}

ModalComponent.propTypes = {};

const styles = StyleSheet.create({
	input: {
		backgroundColor: "#f2f2f2",
		width: '100%',
		borderWidth: 2,
		fontSize: 20,
		borderColor: '#d6d7da',
		marginTop: 20,
	},
	wrapper: {
		width: '100%',
	},
	button: {
		marginBottom: 10,
		marginTop: 40,
	},
	users: {
		fontSize: 40,
		borderWidth: 1,
		borderColor: '#cecece',
		padding: 10,
		margin: 10,
	}
});

export default ModalComponent;