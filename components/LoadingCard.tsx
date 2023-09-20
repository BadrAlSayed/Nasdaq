import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from './Themed'

const LoadingCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}></View>
      <View style={styles.initials}></View>
      <View style={styles.name}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 165,
    height: 131,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#242639',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    borderWidth: 0.5,
    borderColor: '#323443'
  },
  logo: {
    width: 35,
    height: 35,
    backgroundColor: '#2C2E45',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#323443'
  },
  initials: {
    width: 63,
    height: 21,
    borderRadius: 5,
    backgroundColor: '#2C2E45',
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: '#323443'
  },
  name: {
    width: 108,
    height: 15,
    borderRadius: 5,
    backgroundColor: '#2C2E45',
    borderWidth: 0.5,
    borderColor: '#323443'
  }
})

export default LoadingCard
