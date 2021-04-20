import React from 'react';
import { StyleSheet } from 'react-native'

// Import Components
import Search from './Components/Search'
import Auth from './Components/Auth'

// Import React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Import Firebase config
import * as firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDU0KAV2uvz2I9e1nM-sr-f7SQtAYK5PuM",
  authDomain: "front-end-case-study.firebaseapp.com",
  projectId: "front-end-case-study",
  storageBucket: "front-end-case-study.appspot.com",
  messagingSenderId: "758200411853",
  appId: "1:758200411853:web:1544d32bbf2bfd01cf2b84",
  measurementId: "G-L753MHRLNY"
}

if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator()

const MyTheme = {
  colors: {
    background: '#313545',
  },
}

export default function App() {
  return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313545",
  }
})