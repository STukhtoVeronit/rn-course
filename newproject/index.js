import {Navigation} from "react-native-navigation";
// import { AppRegistry } from 'react-native';
import Profiles from './src/Profiles';

Navigation.registerComponent(`navigation.newproject.Profiles`, () => Profiles);

// AppRegistry.registerComponent('newproject', () => App);

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			component: {
				name: "navigation.newproject.Profiles"
			}
		}
	});
});
