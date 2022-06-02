// In App.js in a new project

import React,{useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieScreen from '@screens/movieScreen/MovieScreen';
import SplashScreen from '@components/SplashScreen';
import Colors from '@utility/styles/Colors';
import TabNavigation from '@navigators/TabNavigation/TabNavigation';


const Stack = createNativeStackNavigator();

const Apps = () => {

  const [showSplashScreen, setshowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    },4000)
  },[]);
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
     
      {showSplashScreen ? (
            <Stack.Screen
            options={headerStyle} 
            name="splash" 
            component={SplashScreen} />
            ) : null }
          <Stack.Screen
            options={headerStyle}
            name="Home"
            component={TabNavigation}
          />
          <Stack.Screen
            options={headerStyle}
            name="MovieScreen"
            component={MovieScreen}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const headerStyle = {
  headerShown: false,
  headerStyle: {backgroundColor: Colors.primary},
  headerTitleStyle: {color: 'white'},
};

export default Apps;
function useState(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.');
}

