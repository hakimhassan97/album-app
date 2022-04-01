import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../container/main'
import Gallery from '../container/main/Gallery'
import Detail from '../container/main/Detail'

const HomeStackNavigator = () => {
    const Stack = createStackNavigator()
    return(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Gallery" component={Gallery} options={{headerShown: false}}/>
        <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}}/>
    </Stack.Navigator>
)}

export default HomeStackNavigator