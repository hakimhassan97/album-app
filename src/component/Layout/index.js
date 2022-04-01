import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import React,{ useContext } from 'react';
import { IconFill, IconOutline } from '@ant-design/icons-react-native';
import { H1 } from '../Text';

const windowWidth = Dimensions.get('window').width;

const Header =(props)=> {
  const {onLeftIconClick, title} = props
    return (
      <View style={styles.container}>
        {onLeftIconClick && (
        <TouchableOpacity style={styles.leftIcon} onPress={() => onLeftIconClick()}>
          <H1>{`<`}</H1>
        </TouchableOpacity>)}
        <View style={styles.title}>
          <H1 >{title}</H1>
        </View>
      </View>
    );
}

export {Header};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    // backgroundColor: '#0000001A',
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 40,
  },
  title: {
    maxWidth: 0.75*windowWidth,
  },
  leftIcon: {
    position: 'absolute',
    left: 20,
  }
});
