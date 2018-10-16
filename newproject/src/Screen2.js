import React from 'react'
import {
	View,
	Text,
	Button,
	StyleSheet,
} from 'react-native'
import {Navigation} from 'react-native-navigation';


import {addUser} from './actions/userAction';
import {USER_KEY} from "./config";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import Home from "./Home";
import {goToAuth} from "./navigation";

class Screen2 extends React.Component {
	static get options() {
		return {
			topBar: {
				title: {
					text: 'Screen 2'
				},
			}
		};
	}
	constructor(props){
		super(props);
		this.state = {
			users: []
		}
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.user){
			// this.setState({users: this.state.users.push(user)});
		}
	}
	render() {
		// const usersList = this.props.user.map((user, i)=> <Text key={i}>user.username</Text>);
		console.dir(this.props.user);
		return (
				<View style={styles.container}>
					<Text>Screen 2</Text>
					<Text>{this.props.text}</Text>
					{/*<Button*/}
							{/*onPress={() => Navigation.pop(this.props.componentId)}*/}
							{/*title="Go Back"*/}
					{/*/>*/}
				</View>
		)
	}
}

Screen2.propType = {
	user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	user: state.user,
});

export default connect(mapStateToProps, {})(Screen2);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});