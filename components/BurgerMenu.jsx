import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import React from 'react';
import cab from "../assets/image/cab.png"
import tik from "../assets/image/tik.png"
import price from "../assets/image/price.png"
import pers from "../assets/image/pers.png"
import map from "../assets/image/map.png"
import Line14 from "../assets/image/Line14.png"

const BurgerMenu = ({ handleBurger,handleScreen }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.leftModal} onPress={handleBurger}/>
        <View style={styles.modal}>
            <View style = {styles.modalBox}>
                <View style = {styles.buttonBox}>
                    <TouchableOpacity style = {styles.button} onPress = {()=>{handleScreen("OFFICE")}}>
                        <Image source={cab} style = {styles.svg}/>
                        <Text style = {styles.text}>Мій кабінет</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {()=>{handleScreen("VOUCHERS")}}> 
                        <Image source={tik} style = {styles.svg}/>
                        <Text style = {styles.text}>Мої талони</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {()=>{handleScreen("PRICES")}}>
                        <Image source={price} style = {styles.svg}/>
                        <Text style = {styles.text}>Ціни</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {()=>{handleScreen("ACTIONS")}}>
                            <Image source={pers} style = {styles.svg}/>
                        <Text style = {styles.text}>Акції</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {()=>{handleScreen("MAP")}}>
                        <Image source={map} style = {styles.svg}/>
                        <Text style = {styles.text}>Карта АЗК</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style = {styles.bottomButton}>
                    <Text style = {styles.text}>Вийти</Text>
                    <Image source={Line14} style = {[styles.svg , styles.bottomSvg]}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>

  );
};

export default BurgerMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    position: 'absolute',
    width: '100%',
    flexDirection:'row'
  },
  leftModal: {
    flex: 1,
    backgroundColor: 'transparent',
    height: '110%',
  },
  buttonBox:{

  },
  modal: {
    display:'flex',
    flex:2,
    height: '110%',
    backgroundColor: '#00B488',
  },
  svg:{
    marginRight:22,
    justifyContent:'center'
  },
  bottomSvg:{
    marginLeft:14,
  },
  text:{
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    fontFamily:'Mustica',
    fontSize:18,
    color:'#FCFFFE',

},
  modalBox:{
    marginTop:150,
    paddingLeft:28
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:28
  },
  pers:{
    padding:7,
    backgroundColor:'white',
    borderRadius:50
  },
  bottomButton:{
    alignItems:'center',
    flexDirection:'row',
    textAlign:'center'
  }
});
