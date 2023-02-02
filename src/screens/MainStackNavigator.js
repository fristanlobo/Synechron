import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

class MainStackNavigator extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName='Home'>
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                    />
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>

        )
    }
}
export default MainStackNavigator