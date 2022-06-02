import {StyleSheet, StatusBar, Text, Image, View} from 'react-native';
import React, {FC, useEffect, useContext} from 'react';
import Colors from '@utility/styles/Colors';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {requestApiData} from '@services/redux/movies/movie/movie.action';
import Card from '@components/card';
import {SafeAreaView} from 'react-native-safe-area-context';
import {baseurl} from '@services/api/api';
import MovieScreen from '@screens/movieScreen/MovieScreen';
// import IonIcons from 'react-native-vector-icons/Ionicons';
// import {requestSearch} from '@services/redux/movies/search/search.action';

interface flat {
  renderItem: any;
}
const HomeScreen: FC<flat> = (props: any) => {


  const dispatch = useDispatch();
 
   const users = useSelector((state: any) => {
      return state.user.users
   });

  // const search = useSelector((state: any) => {
  //   return state.search.search
  // })

  useEffect(() => {
    dispatch(requestApiData());
  }, []);

  // useEffect(() => {
  //   if(searchMovie.length > 0) {
  //     console.log('searchMovie',searchMovie.length, searchMovie);
  //   dispatch(requestSearch());
  //   } else {
  //     console.log('searchMovie2',searchMovie.length, searchMovie);
  //     dispatch(requestApiData());
  //   }
  // },[searchMovie.length]);

  //  console.log('HomeScreen',users.poster_path);
  // console.log('Search',search);

  return (
    <SafeAreaView style={styles.homeScreen}>
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={users}
          keyExtractor={(user, index) => 'key' + index}
          // horizontal={true}
          numColumns={2}
          renderItem={(user: any) => {
            return (
              <Card
              navigation={props.navigation}
                id={user.item.id}
                data={user.item}
                urlToImage={`${baseurl}` + user.item.poster_path}
                title={user.item.original_title}
                popularty={user.item.vote_average}
                overView={user.item.release_date}
              />
            );
          }}
        />
        
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
