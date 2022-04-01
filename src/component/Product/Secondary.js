import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React,{ useContext } from 'react';

const PrimaryButton =(props)=> {
  const {title, onPress} = props
  return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text>{title || 'Go'}</ Text>
      </TouchableOpacity>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 200,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: 'aqua',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
