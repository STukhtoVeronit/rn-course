// navigation.js
import {Navigation} from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
	root: {
		bottomTabs: {
			id: 'BottomTabsId',
			children: [
				{
					component: {
						name: 'SignIn',
						options: {
							bottomTab: {
								fontSize: 12,
								text: 'Sign In',
								icon: require('./signIn.png')
							}
						}
					},
				},
				{
					component: {
						name: 'SignUp',
						options: {
							bottomTab: {
								text: 'Sign Up',
								fontSize: 12,
								icon: require('./signUp.png')
							}
						}
					},
				},
				{
					component: {
						name: 'Screen2',
						options: {
							bottomTab: {
								text: 'Screen2',
								fontSize: 12,
								icon: require('./signUp.png'),
								passProps: {
									componentId: 'SignUp'
								}
							}
						}
					},
				},
			],
		}
	}
});

export const goHome = () => Navigation.setRoot({
	root: {

		sideMenu: {
			left: {
				component: {
					name: 'SideMenu',
					passProps: {
						text: 'Screen2 left side menu'
					}
				},
			},
			center: {
				stack: {
					id: 'App',
					children: [
						{
							component: {
								name: 'Home',
							}
						}
					],
				},
			},
			right: {
				component: {
					name: 'SideMenu',
					passProps: {
						text: 'Screen2 right side menu'
					}
				},
			}
		}


	}
});