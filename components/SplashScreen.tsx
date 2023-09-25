import React from 'react'
import { View, Text } from './Themed'
import { Image, StyleSheet } from 'react-native'

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/NasdaqLogo.png')}
        resizeMode='contain'
        style={{ width: 160, height: 45 }}
      />

      <View style={styles.textContainer}>
        <Text>By</Text>
        <Text>Badr AlSayed</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center'
  }
})

export default SplashScreen
