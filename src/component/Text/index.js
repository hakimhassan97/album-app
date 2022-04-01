import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React,{ useContext } from 'react';

const H1 =(props)=> {
    return (
        <Text style={[styles.h1, props.style]}>{props.children}</Text>
    );
}

const H2 = (props) => {
    return (
        <Text style={[styles.h2, props.style]}>{props.children}</Text>
    )
}

export {H1, H2};

const styles = StyleSheet.create({
  h1: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
  },
  h2: {
    fontSize: 16,
    fontWeight: '700',
  },
});
