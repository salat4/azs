import { StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native'
import React, { useEffect } from 'react'
import backButton from '../assets/image/backButton.png'
import burger from '../assets/image/burger.png'
const Office = ({handleScreen}) => {

  return (
    <View>
      <View style = {styles.headerContainer}>
        <TouchableOpacity style = {styles.backButton} onPress ={()=>{handleScreen('MAIN')}}>
          <Image source = {backButton}></Image>
        </TouchableOpacity>
        <Text style = {styles.textHeader}>
          Мій кабінет
        </Text>
        <TouchableOpacity style = {styles.backButton}>
          <Image source = {burger}></Image>
        </TouchableOpacity>
      </View>
      <View style = {styles.mainContainer}>
        <Text style = {styles.mainText}>
        Зареєструйстесь для створення власного кабінету
        </Text>
        <TouchableOpacity style = {styles.mainButton} onPress ={()=>{handleScreen('REGISTRATIONS')}}>
          <Text style = {styles.buttonText}>Зареєструватись</Text>
        </TouchableOpacity>
    </View>
    </View>
    
  )
}

export default Office

const styles = StyleSheet.create({
  headerContainer:{
    alignItems:'center',
    justifyContent:'space-around',
    height:100,
    flexDirection:'row'
  },
  textHeader:{
    fontFamily:'Mustica',
    fontSize:18,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2
  },
  mainContainer:{
    backgroundColor:'#FCFFFE',
    borderWidth: 1,
    borderColor: '#FCFFFE',
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    shadowColor: 'rgba(38, 38, 38, 0.07)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    shadowOpacity: 1,
    paddingHorizontal:30,
    height:'100%'
  },
  mainText:{
    fontFamily:'Mustica',
    fontSize:18,
    textAlign:'center'
  },
  mainButton:{
    backgroundColor: '#00B488',
    borderWidth: 1,
    borderColor: '#FCFFFE',
    borderRadius: 15,
    shadowColor: 'rgba(38, 38, 38, 0.07)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    shadowOpacity: 1,
    gap:46,
    height:58,
    justifyContent:'center',
    marginTop:32
  },
  buttonText:{
    color:'#FCFFFE',
    fontFamily:'Mustica',
    fontSize:18,
    textAlign:'center'
  }
})