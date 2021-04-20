import React from 'react';
import {View, StyleSheet} from 'react-native'

// Import Components
import Search from './Components/Search'
import Auth from './Components/Auth'

// Import React Navigation
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const MyTheme = {
  colors: {
    background: '#313545',
  },
};

export default function App() {
  return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313545",
  }
})