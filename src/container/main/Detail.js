import React,{ useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView, Image, Dimensions, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '@ant-design/react-native';
import { getPhotos } from '../../utils';
import { Header } from '../../component';
import { TextareaItem } from '@ant-design/react-native';

const windowWidth = Dimensions.get('window').width;

export default function Gallery({navigation, route}) {
  const item = route.params;

  const [title, setTitle] = useState(item.item.item.title)

  return (
    <SafeAreaView>
      <Header onLeftIconClick={() => navigation.goBack()} title={title}/>
      <View style={styles.container}>
        <Image
          source={{uri:item.item.item.url}}
          style={styles.image}
        />
        <View style={styles.titleCont}>
          <Text>Title: </Text>
          <TextareaItem value={title} onChange={setTitle} style={styles.textArea} />
        </View>
        {/* <Text>{JSON.stringify(item.item)}</Text> */}
        <View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 5,
    // position: 'absolute',
  },
  titleCont: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingRight: 40,
  },
  textArea: {
    marginTop: -3,
    height: 100,
  },
});