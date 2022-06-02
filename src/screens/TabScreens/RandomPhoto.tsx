import { StyleSheet, Text, Image,  View } from 'react-native'
import React, {useEffect, useState} from 'react'
import {PHOTO_API} from '@services/api/api';
import axios from 'axios'
import Colors from '@utility/styles/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InputText from '@components/InputText';
import Button from '@components/Button';


const RandomPhoto = () => {
 
  const [photo, setPhoto] = useState<any>('');
  const [isLoading, setIsLoading] = useState(false);
  // const [search, setSearch] = useState<any>('');
  
  useEffect(() => {
    fetchPhoto();
  }, []);

  const fetchPhoto = async() => {
    setIsLoading(true);
    const response = await axios.get(PHOTO_API);
    console.log(response.data);
    setIsLoading(false);
    console.log(response.data.urls.regular);
    setPhoto(response.data.urls.small_s3);
    // setSearch(response.data.urls);
  }
  return (
    <View style={styles.container}>
      {/* <InputText 
        placeholder="Search Photo"
        value={search}
        onChangeText={text => setSearch(text)} 
        label={''} 
        secureTextEntry={false}      
          // onPress={}
        /> */}
      <View style={styles.wrapper}>
      <Image source={{uri: photo}} style={styles.posterImage} />
      <View style={styles.button}>
      <Button onPress={fetchPhoto} text={'New Photo'}>
        <Text>{isLoading ? 'Loading...': "New Photo"}</Text>
      </Button> 
      </View>
         
      </View>
    </View>
  )
}

export default RandomPhoto

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    height: '100%',
  },
  wrapper: {

  },
  posterImage: {
    height: 400,
    width: 400,
    justifyContent: 'center',
   
    
  },
  photo: {
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  inputText: {
    width: '5%',
  },
  button: {
    backgroundColor: '#fffff',
    padding: 10,  
    borderRadius: 10,
    marginVertical: 20,
    marginTop: 10,
    height: 50,
    alignItems: 'center',
  }
})