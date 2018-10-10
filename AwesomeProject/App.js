/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator, Image, ScrollView} from 'react-native';
import Nav from "./src/Nav/nav";
import Generate from "./src/Generator/generate";
import ListItem from "./src/Generator/ListItem";
import Input from "./src/Input/input";
import PickerComponent from "./src/Picker/picker";
import Bottle from './src/assets/images/B17-WHT_1024x1024.jpg';
import ModalComponent from "./src/Modal/ModalComponent";

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
			'Double tap R on your keyboard to reload,\n' +
			'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			nameOfApp: 'Hi gayz',
			random: []
		};
	}

	onItemDelete = (i) => {
		const newArray = this.state.random.filter((item, index) => {
			return i !== index;
		});
		this.setState({random: newArray});
	};

	onAddRandom = () => {
		const random = Math.floor(Math.random() * 100 + 1);
		this.setState({random: [...this.state.random, random]})
	};

	render() {
		return (
				<View style={styles.container}>
					<Nav nameOfApp={this.state.nameOfApp}/>
					<ScrollView style={{width: '100%'}}>
						<View style={styles.wrapper }>

							<Generate add={this.onAddRandom}/>
							<ListItem items={this.state.random} delete={this.onItemDelete}/>
							{/*<PickerComponent/>*/}
							{/*<ActivityIndicator*/}
									{/*size="large"*/}
									{/*color="#99999ee"*/}
							{/*/>*/}
							<ModalComponent/>
							{/*<Image*/}
									{/*source={{uri: `https://picsum.photos/${Math.floor(Math.random()*500)}/400`}}*/}
									{/*style={styles.image}*/}
									{/*resizeMode='contain'*/}
									{/*// onLoadEnd={()=> alert('image Loaded')}*/}
									{/*// onLoadStart={() => alert("image has started loading")}*/}
							{/*/>*/}
							{/*<Input/>*/}
						</View>
					</ScrollView>
				</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	wrapper:{
		flex: 1,
		width: '100%',
		padding: 20,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	image:{
		width: "100%",
		height: 300,
		marginTop: 20,

	}
});
