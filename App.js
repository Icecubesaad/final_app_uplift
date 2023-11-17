import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MainPage from './components/MainPage';
import Splash from './components/Splash';
import Slider from './components/Slider';
import PaymentGateway from './components/PaymentGateway';
import Footer from './components/Footer';
import IntroScreens from './components/IntroScreens';
import NumberEnter from './components/NumberEnter';
import IncomingCall from './components/IncomingCall';
export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView>
      {/* <Header/> */}
      <MainPage><IncomingCall/></MainPage>
      {/* <Footer/> */}
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
