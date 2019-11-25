import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './../screens/home';

export default createBottomTabNavigator(
	{
		Home: HomeScreen,
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({}),
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
		},
	},
);
