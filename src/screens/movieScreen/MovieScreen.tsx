import {StyleSheet, Text, Image, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import Colors from '@utility/styles/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {baseurl, API_KEY} from '@services/api/api';
import Loader from '@components/Loader';
import axios from 'axios';
// import IonIcons from 'react-native-vector-icons/Ionicons';
// import {requestSearch} from '@services/redux/movies/search/search.action';

interface flat {
  renderItem: any;
}
const MovieScreen: FC<flat> = ({route} : any) => {

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

  const getdata = async (id: any) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    setContent(res.data);
    setIsLoading(false);  
  }

  return (
    <SafeAreaView style={styles.homeScreen}>
      
        {
          isLoading ? ( <Loader /> 
          ) : ( 
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: `${baseurl}` + content?.poster_path}} />
                </View>   
                <Text style={styles.voteAverage}>{`Rating: ${content?.vote_average}`}</Text>
                <Text style={styles.voteCount}>{`VoteCount: ${content?.vote_count}`}</Text>
                <Text style={styles.releaseDate}>{`Release Date: ${content?.release_date}`}</Text>
                <Text style={styles.originalTitle}>{content?.original_title}</Text> 
                <Text style={styles.overview}>{content?.overview}</Text>
            </View>
          )
        }
        
    </SafeAreaView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    marginStart: 0,
    backgroundColor: Colors.secondary,
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '50%',
  },
  image: {
    alignSelf: 'center',
    flex: 1,
    width: '100%',
    height: 50,
  },
  voteAverage : {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 17,
    color: Colors.primary,
  },
  voteCount: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 17,
    color: Colors.primary,
  },
  releaseDate: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 17,
    color: Colors.primary,
  },
  originalTitle: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primary,
    alignSelf: 'center',
  },
  overview: {
    marginTop: 5,
    fontSize: 15,
    color: Colors.primary,
    marginBottom: 200,
  },
 
});
