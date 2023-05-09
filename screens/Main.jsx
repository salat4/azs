import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header';
import { useFonts } from 'expo-font';
import save10 from "../assets/image/save10.png"
import persentage from "../assets/image/persentage.png"
import ticket from "../assets/image/ticket.png"
import MapView from 'react-native-maps';
import petrol from "../assets/image/petrol.png"
import card from "../assets/image/card.png"
import barcode from "../assets/image/barcode.png"
import BurgerMenu from '../components/BurgerMenu';
const Main = ({handleScreen}) => {
  const [burgerOn, setBurgerOn] = useState(false)
  const [loaded] = useFonts({
    Mustica: require("../assets/font/mustica_pro/MusticaPro-SemiBold.otf"),
  });

  if (!loaded) {
    return null;
  }
  const handleBurger = () =>{
    setBurgerOn(!burgerOn)
  }
  return (
    <>
      <Header handleBurger = {handleBurger}/>
      <View style = {styles.container}>
        <Image style = {styles.save10} source={save10}></Image> 
        <Text style = {[styles.textSale , styles.text]}>Слідкуй за знижками</Text>  
        <View>
          <View >
            <View style = {styles.containerPersent}>
              <View style={styles.persent}>
                <Image style={styles.persentImg}  source={persentage}/>
              </View>
              <Text style = {styles.text}>
                Отримати персональну знижку
              </Text>
            </View>
            <View style = {styles.containerBox}>
              <View style = {styles.containerPersent}>
                <View style={styles.persent}>
                  <Image source={ticket}></Image>
                </View>
                <Text style = {[styles.text, styles.textPetrol]}>Придбати пальне</Text>
              </View>
              <View style = {styles.containerPersent}>
                <View style={styles.persent}>
                  <Image source={petrol}></Image>
                </View>
                <Text style =  {[styles.text, styles.textPetrol]}>Ціни на пальне</Text>
              </View>
            </View>
            <Text style = {[styles.text, styles.textCard]}>Паливна картка</Text>
            <View style = {styles.containerPersent}>
                <View style={[styles.persent,styles.card]}>
                  <Image source={card}></Image>
                </View>
                <Text style = {[styles.text, styles.textPrice]}>1205.80 грн</Text>
                <View style={styles.barcode}>
                  <Image source={barcode}></Image>
                </View>
              </View>
              <Text style = {styles.text}>Карта АЗК САН</Text>
              <View style={styles.containerMap}>
              <MapView style = {styles.map}
                  initialRegion={{
                    // 50.438857702745494, 30.52321551251997
                    latitude: 50.438857702745494,
                    longitude: 30.52321551251997,
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002,
                  }}
                />
              
              </View>
          </View>
          
        </View>
      </View>
    {burgerOn && <BurgerMenu handleBurger = {handleBurger} handleScreen={handleScreen}/>}
    </>
  )
}

export default Main

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:50,
    height:'100%'
  },
  map: {
    marginTop:18,
    width: 331,
    height: '50%',
    borderRadius:15,
    borderWidth: 1,
    borderColor: '#FCFFFE',
    shadowColor: '#262626',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  textPetrol:{
    lineHeight:15,
    width:95,
    textAlign:'left',
  },
  textCard:{
    marginBottom:18
  },
  card:{
    marginRight:7,
  },
  textPrice:{
    fontSize:18,
    marginRight:16,
    marginLeft:0
  },
  containerBox:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  containerPersent:{
  marginBottom:18,
  display:'flex',
  borderColor: '#FCFFFE',
  flexDirection:'row',
  alignItems: 'center', 
  borderWidth:1,
  borderRadius:15,
  backgroundColor: '#FCFFFE',
  shadowColor: '#262626',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.07,
  shadowRadius: 10,
  borderBottomWidth: 2,
  borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  borderStyle: 'solid',
  height:59,
  },
  containerMap:{

  },
  persent:{
    padding:7,
    marginRight:12,
    marginLeft:5,
    borderWidth:1,
    borderRadius:50,
    borderStyle:'solid',
    borderColor: '#FCFFFE',
    shadowColor: '#FCFFFE',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  text:{
    fontFamily:'Mustica',
    fontSize:14,
    color:"#303030",
    fontStyle:'normal',
    fontWeight:600,
  },
  save10:{
    alignSelf:"center"
  },
  textSale:{
    textAlign:'left',
    alignSelf:'flex-start',
    
    marginVertical:18,
  }
})