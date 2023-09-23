import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from '../Themed'
import { type UseQueryResult } from '@tanstack/react-query'
import type { TickerDetails } from '../../models/model'

interface Props {
  tickerDetailsQuery: UseQueryResult<TickerDetails, undefined>
}
const About: React.FC<Props> = ({ tickerDetailsQuery }) => {
  const tickerDetails = (tickerDetailsQuery.data as TickerDetails).results
  return (
    <View style={styles.container}>
      <Text style={styles.about}>About</Text>
      {tickerDetails?.description === undefined ? (
        <Text style={styles.description}>No description present</Text>
      ) : (
        <Text style={styles.description}>{tickerDetails?.description}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 350
    // height: 340
  },
  about: {
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
    marginBottom: 10
  },
  description: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)'
  }
})

export default About
