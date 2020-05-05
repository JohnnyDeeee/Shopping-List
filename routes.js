import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Home from './Screens/Home/Home.react';
import Settings from './Screens/Settings/Settings.react';

const Tab = createMaterialBottomTabNavigator();

class MainTabNavigator extends Component {
	render() {
		return (
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName={ "Home" }
					screenOptions={ ({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;

							if (route.name === 'Home') {
								iconName = focused ? 'home' : 'home-outline';
							} else if (route.name === 'Settings') {
								iconName = focused ? 'settings' : 'settings-outline';
							}

							return <MaterialCommunityIcons name={ iconName } size={ 20 } color={ color }/>;
						}
					}) }
					tabBarOptions={ {
						activeTintColor: 'tomato', // TODO: What is this for
						inactiveTintColor: 'gray'
					} }>
					<Tab.Screen name={ "Home" } component={ Home }/>
					<Tab.Screen name={ "Settings" } component={ Settings }/>
				</Tab.Navigator>
			</NavigationContainer>
		);
	}
}

export default MainTabNavigator;