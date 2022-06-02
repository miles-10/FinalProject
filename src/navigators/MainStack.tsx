// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieScreen from '@screens/movieScreen/MovieScreen';
import Colors from '@utility/styles/Colors';
import TabNavigation from '@navigators/TabNavigation/TabNavigation';
import {ScrollView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const Apps = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
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
  title: 'Movies',
  headerStyle: {backgroundColor: Colors.primary},
  headerTitleStyle: {color: 'white'},
  headerLeft: () => <Icon name="menu" size={28} color="white" />,
  headerRight: () => <Icon name="search" size={28} color="white" />,
};

export default Apps;
