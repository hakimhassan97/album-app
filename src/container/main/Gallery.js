import React,{ useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '@ant-design/react-native';
import { getPhotos } from '../../utils';
import { Header } from '../../component';

const numColumns = 3

export default function Gallery({navigation, route}) {
  const album = route.params;
  const [pictures, setPictures] = useState([])

  useEffect(async()=>{
    let tempPictures = await getPhotos(album.item.item.id)
    setPictures(tempPictures)
  }, [])

  return (
    <SafeAreaView>
      <Header onLeftIconClick={() => navigation.goBack()} title="Gallery"/>
      <View style={styles.container}>
        <Text>{album.item.item.title}</ Text>
        <View>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={pictures}
            numColumns={numColumns}
            contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}
            renderItem={(item) =>( 
                <TouchableOpacity
                  onPress={() => navigation.navigate('Detail', {item})}
                  style={styles.albumItem}>
                    <View style={styles.albumTile}>
                      <Image
                        source={{uri:item.item.thumbnailUrl}}
                        style={styles.image}
                      />
                      <View style={styles.titleBox}>
                      <Text style={{fontSize: 10}}>{item.item.title.slice(0, 15)+ '...'}</Text>
                      </View>
                    </View>
                </TouchableOpacity>
            )}
        />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 0,
  },
  albumItem: {
    height: 100,
    // flex: 0.3,
    width: `${100/numColumns}%`,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'aqua',
    // borderWidth: 1,
    // borderColor: 'black',
    // marginVertical: 5,
    // flex: 0.5,
    padding: 10,
  },
  albumTile: {
    backgroundColor: '#00000033',
    width: '100%',
    height: '100%',
    borderRadius: 5,
    // padding: 5,
    // wid
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
    // position: 'absolute',
  },
  titleBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 5,
    backgroundColor:"#ffffff1A"
  },
});