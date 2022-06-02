import {StyleSheet, Text, View} from 'react-native';


import CustomButton from '@components/Button';
import React, {useState} from 'react';
import HomeScreen from '@screens/HomeScreens/HomeScreen';
import SignInScreen from '@screens/SignInScreen/SignInScreen';
import InputText from '@components/InputText';
import Colors from '@utility/styles/Colors';


const LoginScreen = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>LoginScreen</Text>
      <InputText
              label="Username:"
              placeholder="Enter your username"
              value={username}
              onChangeText={onChangeText => setusername(onChangeText)} secureTextEntry={false}      />
      <InputText 
             label="Password" 
             placeholder="Password:" 
             secureTextEntry={true} 
             value={password} 
             onChangeText={(onChangeText)=>setpassword(onChangeText)}
             />
      <CustomButton text="Login" onPress={HomeScreen} />
      <View style={styles.nextButton}>
        <CustomButton text="SignIn" onPress={SignInScreen} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.primary,
    height: '100%',
  },
  heading: {
    fontSize: 25,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  nextButton: {
    marginTop: 20,
  }
});
