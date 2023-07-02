import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/main/HomePage';
import SecondPage from './src/SecondPage';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomePage'>
      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}/>
      <Stack.Screen name="SecondPage" component={SecondPage} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
const styles = StyleSheet.create({})




