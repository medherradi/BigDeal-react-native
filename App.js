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
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppScreen from './app/components/AppScreen';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';


export default function App() {
  return (
    <LoginScreen />

  );
}


const styles = StyleSheet.create({
});
