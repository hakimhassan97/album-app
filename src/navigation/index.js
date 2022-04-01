import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeStackNavigator from './HomeStackNavigator';

const AppNavigator = ({navigation}) => {
    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='HomeStack'
                    component={HomeStackNavigator}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;