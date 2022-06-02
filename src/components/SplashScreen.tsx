import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import Colors from '@utility/styles/Colors';
import Logo from '@assets/image/logo.png';


const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image source={Logo} style={styles.logo}/>

      <Text style={styles.text}>Movie App</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 200,
    width: 200,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  }
})