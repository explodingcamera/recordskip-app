import React from 'react';

import { NavigationNativeContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Feather } from '@expo/vector-icons';

import Home from './../screens/home';
import Library from './../screens/library';
import Explore from './../screens/explore';
import Settings from './../screens/settings';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabBarIconSize = 22;

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationNativeContainer>
				<Stack.Navigator initialRouteName="Home" headerMode="none">
					<Stack.Screen name="Home">
						{() => (
							<Tab.Navigator
								shifting={true}
								initialRouteName="camera"
								labelStyle={{ fontSize: 12 }}
								screenOptions={{
									...TransitionPresets.DefaultTransition,
									animationEnabled: true,
								}}
								backBehavior="initialRoute"
							>
								<Tab.Screen
									name="library"
									component={Library}
									options={{
										tabBarColor: 'grey',
										tabBarLabel: 'library',
										tabBarIcon: ({ color }) => (
											<Feather
												name="book-open"
												color={color}
												size={TabBarIconSize}
											/>
										),
									}}
								/>
								<Tab.Screen
									name="camera"
									component={Home}
									options={{
										tabBarColor: 'blue',
										tabBarLabel: '',
										tabBarIcon: ({ color }) => (
											<Feather
												name="camera"
												color={color}
												size={23}
												style={{ paddingTop: 6 }}
											/>
										),
									}}
								/>
								<Tab.Screen
									name="explore"
									component={Explore}
									options={{
										tabBarColor: 'grey',
										tabBarLabel: 'explore',
										tabBarIcon: ({ color }) => (
											<Feather
												name="star"
												color={color}
												size={TabBarIconSize}
											/>
										),
									}}
								/>
							</Tab.Navigator>
						)}
					</Stack.Screen>

					<Stack.Screen name="Settings" component={Settings} />
				</Stack.Navigator>
			</NavigationNativeContainer>
		</SafeAreaProvider>
	);
}
