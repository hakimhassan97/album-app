import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppProvider, AppContext } from './context';
import React,{ useContext } from 'react';
import AppNavigator from './navigation';

export default function App() {
  return (
    <AppProvider>
      {/* <Text>Kambing</Text> */}
      <AppNavigator />
    </AppProvider>
  );
}
