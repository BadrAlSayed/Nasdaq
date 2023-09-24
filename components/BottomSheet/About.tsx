import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from '../Themed'

interface Props {
  tickerDescription: string
}
const About: React.FC<Props> = ({ tickerDescription }) => {
  // const tickerDetails = (tickerDetailsQuery.data as TickerDetails).results
  return (
    <View style={styles.container}>
      <Text style={styles.about}>About</Text>
      {tickerDescription === undefined ? (
        <Text style={styles.description}>No description present</Text>
      ) : (
        <Text style={styles.description}>{tickerDescription}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  about: {
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
    paddingBottom: 10,
    color: '#FFF'
  },
  description: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)'
  }
})

export default About
