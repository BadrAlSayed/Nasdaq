import React from 'react'
import { View } from './Themed'
import { TextInput, StyleSheet } from 'react-native'
const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Search for stocks' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  input: {
    height: 40,
    width: 350,
    opacity: 0.3,
    borderRadius: 25,
    backgroundColor: '#323443',
    padding: 10,
    borderWidth: 1,
    borderColor: '#323443'
  }
})

export default SearchBar
