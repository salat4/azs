import * as firebase from 'firebase/app';
import { StyleSheet, Text, View ,Image,Button,TextInput} from 'react-native'
import React, { useState } from 'react'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDhA9H35aroQH8Xai1yGxkGtO_EYCFNoto",
  authDomain: "azs1-83ff0.firebaseapp.com",
  // projectId: "azs1-83ff0",
  storageBucket: "azs1-83ff0.appspot.com",
  messagingSenderId: "726810757716",
  appId: "1:726810757716:web:268b0163d52f36ec953bc1",
  measurementId: "G-8KL1PBT77X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const Registrations = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [phone, setPhone] = useState('+38(0');
  // const [phoneNumber, setPhoneNumber] = useState('+38 096 046 30 61');
  // const [verificationCode, setVerificationCode] = useState('');
  // const [verificationId, setVerificationId] = useState('');
  const handleSubmit = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };
  const handleSendCode = async () => {
    // const phoneProvider = new firebase.auth.PhoneAuthProvider();
    console.log(firebase.auth.PhoneAuthProvider())
    // const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber);
    // setVerificationId(verificationId);
  };
  
  const handleVerifyCode = async () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      verificationCode,
    );
    const user = await firebase.auth().signInWithCredential(credential);
    console.log(user);
  };

  const handleChange = (text) => {
    setPhone(text)
    
  };

  return (
    <View>
      <TextInput placeholder="Enter email" onChangeText={setEmail} />
      <TextInput placeholder="Enter password" onChangeText={setPassword} secureTextEntry />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
  // return (
  //   // <View style = {styles.container}>
  //   //   <View style = {styles.logoContainer}>
  //   //     <Image style = {styles.logo} source={logo}></Image>
  //   //     <Text style ={styles.textLogo}>ПРОЦЕС реєстраціЇ</Text>
  //   //   </View>
  //   //   <View style ={styles.mainContainer}>
  //   //     <Text style ={styles.mainText}>
  //   //       Введіть Ваш номер телефону
  //   //     </Text>
  //   //     <View>
  //   //       <Text>
  //   //       🇺🇦
  //   //       </Text>
  //   //       <TextInput
  //   //       style={styles.input}
  //   //       onChangeText={handleChange}
  //   //       value={phone}
  //   //       keyboardType="phone-pad"
  //   //       >

  //   //       </TextInput>
  //   //       <Image source={cross}></Image>
  //   //     </View>
       
  //   //   </View>
  //   // </View>
  //   <View>
  //     <TextInput
  //       placeholder="Enter phone number"
  //       style ={styles.textInput}
  //       value={phoneNumber}
  //       onChangeText={setPhoneNumber}
  //     />
  //     <Button title="Send verification code" onPress={handleSendCode} />
  //     <TextInput
  //       style ={styles.textInput}
  //       placeholder="Enter verification code"
  //       value={verificationCode}
  //       onChangeText={setVerificationCode}
  //     />
  //     <Button title="Verify code" onPress={handleVerifyCode} />
  //   </View>
  // )
}

export default Registrations

const styles = StyleSheet.create({
  container:{
    paddingTop:100,
    height:'100%'
  },
  logoContainer:{
    alignItems:'center',
    paddingBottom:32
  },
  logo:{
    marginBottom:39,
  },
  textLogo:{
    fontSize:16,
    fontFamily:'Intro',
    lineHeight:20,
    fontWeight:400
  },
  mainContainer:{
    paddingHorizontal:32
  },
  mainText:{
    fontFamily:'Mustica',
    fontSize:12,
    fontWeight:600
  },
  input:{
    height:44,
    fontSize: 16,
    fontWeight: '500',
    color: '#1E1E1E',
    borderColor:"#FCFFFE",
    borderWidth:1,
    borderRadius:15,
    shadowColor: '#262626',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 2,
    backgroundColor:'#FCFFFE'
  },
  textInput:{
    marginBottom:100
  }
})