import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import React from 'react';
import Colors from '@utility/styles/Colors';
import MovieScreen from '@screens/movieScreen/MovieScreen';

const card = ({title, overView, urlToImage, popularty, navigation, id}: any) => {
  // const handleOnPress = () => {
  //     Linking.openURL(`${url}`).catch(err => Alert.alert('Error'));
  // }
  const handleOnPress = () => {
    return navigation.navigate('MovieScreen',{id});
  };
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={handleOnPress} >
        <Image source={{uri: urlToImage}} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rating}>{popularty}/</Text>
        <Text style={styles.overView}>{overView}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default card;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: Colors.primary,
  },
  image: {
    alignSelf: 'center',
    flex: 1,
    width: 180,
    height: 250,
  },
  title: {
    marginTop: 10,
    flex: 1,
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
    flexDirection: 'row',
    margin: 5,
  },
  rating: {
    fontSize: 15,
    color: Colors.white,
    fontWeight: 'bold',
    flexDirection: 'row',
    margin: 5,
  },
  overView: {
    fontSize: 12,
    color: Colors.white,
    margin: 5,
  },
});
function movieId(arg0: string, movieId: any, arg2: {}) {
  throw new Error('Function not implemented.');
}

