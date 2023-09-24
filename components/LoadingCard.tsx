import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { View } from './Themed'

const LoadingCard: React.FC = () => {
  const screenWidth = Dimensions.get('window').width
  const itemWidth = (screenWidth - 60) / 2
  return (
    <View>
      <View style={[styles.container, { width: itemWidth }]}>
        <View style={styles.logo}></View>
        <View style={styles.initials}></View>
        <View style={styles.name}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#242639',
    borderRadius: 20,
    padding: 26,
    margin: 10,
    borderWidth: 0.5,
    borderColor: '#323443'
  },
  logo: {
    paddingHorizontal: 17,
    paddingVertical: 17,
    backgroundColor: '#2C2E45',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#323443'
  },
  initials: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#2C2E45',
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: '#323443'
  },
  name: {
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 5,
    backgroundColor: '#2C2E45',
    borderWidth: 0.5,
    borderColor: '#323443'
  }
})

export default LoadingCard
