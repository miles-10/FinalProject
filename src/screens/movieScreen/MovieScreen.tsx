import {StyleSheet, StatusBar, Text, Image, View} from 'react-native';
import React, {FC, useEffect, useContext, useState} from 'react';
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
import {baseurl, API_KEY} from '@services/api/api';
import Loader from '@components/Loader';
import axios from 'axios';
// import IonIcons from 'react-native-vector-icons/Ionicons';
// import {requestSearch} from '@services/redux/movies/search/search.action';

interface flat {
  renderItem: any;
}
const MovieScreen: FC<flat> = ({route, navigation} : any) => {

  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState<any>();

  // const dispatch = useDispatch();
 
  //  const users = useSelector((state: any) => {
  //     return state.user.users
  //  });

   
  // const search = useSelector((state: any) => {
  //   return state.search.search
  // })

  useEffect(() => {
    setIsLoading(true);
    if(route.params.id) {
      const response = getdata(route.params.id);
    }
    }
  , [route.params?.id]);
  console.log('hello', content);
  const getdata = async (id: any) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    setContent(res.data);
    setIsLoading(false);  
  }

  


  // console.log('check', users[0].poster_path);
  // console.log('check',content[0].original_title);
  return (
    <SafeAreaView style={styles.homeScreen}>
      
        {
          isLoading ? ( <Loader /> 
          ) : ( 
            <View style={styles.container}>
              <View>
                <Image style={styles.image} source={{uri: `${baseurl}` + content?.backdrop_path}} />  
                <Text style={styles.voteAverage}>{content?.vote_average}</Text>
                <Text style={styles.voteCount}>{content?.vote_count}</Text>
                <Text style={styles.releaseDate}>{content?.release_date}</Text>
                <Text style={styles.originalTitle}>{content?.original_title}</Text> 
                <Text style={styles.overview}>{content?.overview}</Text>
                         
                </View>  
            </View>
          )
        }
       {/* <Image source={{uri:`${baseurl}` + content.poster_path}} style={styles.image}/> */}

        {/* {users && users.map((mov: any) =>(
          <Text>{mov.original_title}</Text>
        ))} */}
        {/* <FlatList
          style={styles.flatList}
          data={users}
          keyExtractor={(user, index) => 'key' + index}
          // horizontal={true}
          numColumns={2}
          renderItem={(user: any) => {
            return (
              <Card
              navigation={props.navigation}
                key={user.item.id}
                urlToImage={`${baseurl}` + user.item.poster_path}
                title={user.item.original_title}
                popularty={user.item.vote_average}
                overView={user.item.release_date}
              />
            );
          }}
        /> */}
        {/* <Image source={users.}></Image> */}
        
   
    
    </SafeAreaView>
  );
};

export default MovieScreen;

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
  image: {
    alignSelf: 'center',
    flex: 1,
    width: 400,
    height: '1%',
  },
  voteAverage : {

  },
  voteCount: {

  },
  releaseDate: {

  },
  originalTitle: {

  },
  overview: {

  },
 
});
