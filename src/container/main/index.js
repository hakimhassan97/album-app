import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import React,{ useContext } from 'react';
import { AppContext } from '../../context';
import { H1, H2, Header } from '../../component';

const numColumns = 3

export default function Home({navigation}) {
    const {albums} = useContext(AppContext)
  return (
      <SafeAreaView>
        <Header title="Album"/>
        <View style={styles.container}>
        {/* <Text>{JSON.stringify(albums)}</Text> */}
        <View>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={albums}
            numColumns={numColumns}
            renderItem={(item) =>( 
                <TouchableOpacity
                  onPress={() => navigation.navigate('Gallery', {item})}
                  style={styles.albumItem}>
                    <View style={styles.albumTile}>
                      <Text>{item.item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        /></View>
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
    backgroundColor: '#0000001A',
    width: '100%',
    height: '100%',
    borderRadius: 5,
    padding: 5,
    // wid
  }
});
