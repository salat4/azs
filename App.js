import { StyleSheet, Text, View,SafeAreaView, ImageBackground } from 'react-native';
import Main from './screens/Main'
import Actions from './screens/Actions'
import Login from './screens/Login'
import Map from './screens/Map'
import Office from './screens/Office'
import Prices from './screens/Prices'
import Registrations from './screens/Registrations'
import Vouchers from './screens/Vouchers'
import {ScreenType} from "./constants/constants"
import { useState } from 'react';
import background from './assets/image/background.png'
export default function App() {
  const [screen, setScreen] = useState(ScreenType.Registrations)
  const handleScreen = (item) =>{
    setScreen(item)
  }
  let content;
  switch (screen) {
    case ScreenType.Actions:
      content = <Actions />
      break;
    case ScreenType.Main:
      content = <Main handleScreen = {handleScreen}/>
      break;
    case ScreenType.Login:
      content = <Login/>
      break;
    case ScreenType.Map:
      content = <Map/>
      break;
    case ScreenType.Office:
      content = <Office handleScreen = {handleScreen}/>
      break;
    case ScreenType.Prices:
      content = <Prices/>
      break;
    case ScreenType.Registrations:
      content = <Registrations/>
      break;
    case ScreenType.Vouchers:
      content = <Vouchers/>
      break;
    default:
      break;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={background}>
        {content}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
