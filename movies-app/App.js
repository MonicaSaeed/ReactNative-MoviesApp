import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigation from './navigation/drawerNavigation';
import MoviesContextProvider from './context/moviesContextProvider';
import DynamicStackNavigation from './navigation/dynamicStackNavigation';

export default function App() {
  return (
    <MoviesContextProvider>
      <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
    </MoviesContextProvider>
  );
}

const styles = StyleSheet.create({
  
});
