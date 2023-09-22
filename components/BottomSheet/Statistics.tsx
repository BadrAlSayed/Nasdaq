import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from '../Themed'
import type { PreviousClose } from '../../models/model'
import type { UseQueryResult } from '@tanstack/react-query'

interface Props {
  tickerPrevCloseQuery: UseQueryResult<PreviousClose, undefined>
}
const Statistics: React.FC<Props> = ({ tickerPrevCloseQuery }) => {
  const tickerPrevClose = (tickerPrevCloseQuery.data as PreviousClose)
    .results[0]

  return (
    <View style={styles.container}>
      <Text>STATISTICS</Text>
      <View style={styles.price}>
        <View>
          <View style={styles.row}>
            <Text style={styles.priceTitle}>Open</Text>
            <Text>{tickerPrevClose.o}</Text>
          </View>
          <View>
            <Text style={styles.priceTitle}>High</Text>
            <Text>{tickerPrevClose.h}</Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.priceTitle}>Close</Text>
            <Text>{tickerPrevClose.c}</Text>
          </View>
          <View>
            <Text style={styles.priceTitle}>Low</Text>
            <Text>{tickerPrevClose.l}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 350,
    height: 130
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: 200
  },
  priceTitle: {
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.60)',
    marginBottom: 5
  },
  row: {
    color: 'red',
    justifyContent: 'space-between'
  }
})

export default Statistics
