import {StyleSheet, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import Colors from '@utility/styles/Colors';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import Card from '@components/card';
import {SafeAreaView} from 'react-native-safe-area-context';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {requestSearch} from '@services/redux/movies/search/search.action';
import {baseurl} from '@services/api/api';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

interface flat {
  renderItem: any;
}
const Search: FC<flat> = (props: any) => {
  const [searchMovie, setSearchMovie] = useState<any>('');
  const [keyword, setKeyword] = useState('');

  // const dispatch = useDispatch();

  // const search = useSelector((state: any) => {
  //   setSearchMovie(state.search.search);
  // });

  // console.log('search',search);

  // useEffect(() => {
  //   dispatch(requestSearch());
  // },[keyword.length]);

  const fetchData = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=8d7f83d8bfcf03d79c463477132fc11b&language=en-US&page=1&include_adult=false&query=${keyword}`,
    );
    setSearchMovie(data.results);
  };

  useEffect(() => {
    fetchData();

  }, [keyword.length]);

  return (
    <SafeAreaView style={styles.homeScreen}>
      <TextInput
        style={styles.input}
        value={searchMovie}
        onChangeText={(text: any) => setKeyword(text)}
        placeholder="Search Movies"
      />
      <IonIcons style={styles.icon} name="search" color="#a64dff" size={20} />
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={searchMovie}
          keyExtractor={(search, index) => 'key' + index}
          // horizontal={true}
          numColumns={2}
          renderItem={(search: any) => {
            return (
              <Card
                navigation={props.navigation}
                key={search.item.id}
                urlToImage={`${baseurl}` + search.item.poster_path}
                title={search.item.original_title}
                popularty={search.item.vote_average}
                overView={search.item.release_date}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    marginStart: 0,
    backgroundColor: Colors.secondary,
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    top: 25,
    right: 60,
  },
  input: {
    backgroundColor: Colors.white,
    marginTop: 10,
    alignSelf: 'center',
    width: '75%',
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    height: 48,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  flatList: {
    width: 400,
    textAlign: 'center',
    margin: 5,
    padding: 10,
  },
  // posterImage: {
  //   height: 200,
  //   width: 200,
  //   borderRadius: 10,
  // },
});
