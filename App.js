import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ImageScreen from './app/screens/ImageScreen';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import AppCard from './app/components/AppCard';
import colors from './app/config/colors';
import ProductDetailScreen from './app/screens/ProductDetailScreen';
import MessageScreen from './app/screens/MessageScreen';
import AccountScreen from './app/screens/AccountScreen';


export default function App() {
  return (
    <AccountScreen />
  );
}


const styles = StyleSheet.create({

});
