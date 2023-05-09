import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import bell from '../assets/image/bell.png'
import title from "../assets/image/title.png"
import burger from "../assets/image/burger.png"
import { useFonts } from 'expo-font';

const Header = ({handleBurger}) => {
    const [loaded] = useFonts({
        Intro: require('../assets/font/intro/Intro.otf'),
      });
    
      if (!loaded) {
        return null;
      }
  return (
    <View style = {styles.container}>
      <Image source={bell}></Image>
      <View style = {styles.titleContainer}>
        <Image source={title}></Image>
        <Text style = {styles.title}>САН</Text>
      </View>
      <TouchableOpacity onPress={handleBurger}>
        <Image source={burger}></Image>
      </TouchableOpacity>
     
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'space-around',
        height:100,
        flexDirection:'row'
    },
    title:{
        fontFamily:'Intro',
        fontSize:12,
        fontStyle:'normal',
        color:"#303030"
        // lineHeight:100
    },
    titleContainer:{
       alignItems:"center" 
    }
})