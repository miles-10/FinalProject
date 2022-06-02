import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginScreen from '@screens/LoginScreen/LoginScreen';
import SignupScreen from '@screens/SignInScreen/SignInScreen';
import DrawerNavigation from '@navigators/DrawerNavigation/DrawerNavigation';
import TabNavigation from '@navigators/TabNavigation/TabNavigation';
import MainStack from '@navigators/MainStack';
import store from '@services/redux/store';
import {Provider} from 'react-redux';
import Photo from '@screens/TabScreens/RandomPhoto';
import HomeScreen from '@screens/HomeScreens/HomeScreen';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainStack />
        {/* <LoginScreen /> */}
        {/* <SignupScreen /> */}
        {/* <DrawerNavigation /> */}
        {/* <ToDoList /> */}
        {/* <TabNavigation /> */}
        {/* <MainStack /> */}
        {/* <Photo /> */}
        {/* <HomeScreen /> */}
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
