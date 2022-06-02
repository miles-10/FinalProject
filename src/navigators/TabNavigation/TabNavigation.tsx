import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '@screens/HomeScreens/HomeScreen';
import ToDoScreen from '@screens/TabScreens/ToDoList';
import RandomPhoto from '@screens/TabScreens/RandomPhoto';
import SearchScreen from '@screens/TabScreens/SearchMovie';
import Colors from '@utility/styles/Colors';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Colors.primary,
          headerTitleStyle: Colors.white,
        },
        style: {
          backgroundColor: 'green',
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName: any;

          if (route.name === 'Movie') {
            iconName = focused ? 'tv' : 'tv-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-circle' : 'search-circle-outline';
          } else if (route.name === 'List') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'RandomPhoto') {
            iconName = focused ? 'md-image' : 'md-image-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Movies" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Reminder" component={ToDoScreen} />
      <Tab.Screen name="Photo" component={RandomPhoto} />
    </Tab.Navigator>
  );
};

export default MyTabs;
