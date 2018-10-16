import {Navigation} from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from './store/store';

export function registerScreens() {
	// Navigation.registerComponent('Home', () => require('./Home').default);
	Navigation.registerComponentWithRedux('Home', () => require('./Home').default, Provider, store);
	// Navigation.registerComponent('Initializing', (sc) => require('./Initializing').default);
	Navigation.registerComponentWithRedux('Initializing', (sc) => require('./Initializing').default, Provider, store);
	// Navigation.registerComponent('SignIn', () => require('./SignIn').default);
	Navigation.registerComponentWithRedux('SignIn', () => require('./SignIn').default, Provider, store);
	// Navigation.registerComponent('SignUp', () => require('./SignUp').default);
	Navigation.registerComponentWithRedux('SignUp', () => require('./SignUp').default, Provider, store);
	// Navigation.registerComponent('Screen2', () => require('./Screen2').default);
	Navigation.registerComponentWithRedux('Screen2', () => require('./Screen2').default, Provider, store);
	// Navigation.registerComponent('SideMenu', () => require('./sideMenu').default);
	Navigation.registerComponentWithRedux('SideMenu', () => require('./sideMenu').default, Provider, store);
}