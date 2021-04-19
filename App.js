import React from 'react';
import {View, StyleSheet} from 'react-native'
// Import Components
import Search from './Components/Search'

export default function App() {
  return (
    <View style={styles.container}>
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313545",
  }
})