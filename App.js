import 'react-native-gesture-handler';

import React, { Component } from 'react';
import Container from "./Components/Container";
import MainTabNavigator from "./routes";

class App extends Component {
	render() {
		return (
			<MainTabNavigator/>
		);
	}
}

export default App;
