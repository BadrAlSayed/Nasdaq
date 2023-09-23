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
      <Text style={styles.title}>STATISTICS</Text>
      <View style={styles.price}>
        <View style={styles.first}>
          <View>
            <Text style={styles.priceTitle}>Open</Text>
            <Text style={styles.priceStyle}>{`$${tickerPrevClose.o.toFixed(
              2
            )}`}</Text>
          </View>
          <View>
            <Text style={styles.priceTitle}>High</Text>
            <Text style={styles.priceStyle}>{`$${tickerPrevClose.h.toFixed(
              2
            )}`}</Text>
          </View>
        </View>
        <View style={styles.first}>
          <View>
            <Text style={styles.priceTitle}>Close</Text>
            <Text style={styles.priceStyle}>{`$${tickerPrevClose.c.toFixed(
              2
            )}`}</Text>
          </View>
          <View>
            <Text style={styles.priceTitle}>Low</Text>
            <Text style={styles.priceStyle}>{`$${tickerPrevClose.l.toFixed(
              2
            )}`}</Text>
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
    width: 350
  },
  title: {
    color: '#FFF',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
    marginBottom: 15
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    minHeight: 120
  },
  priceTitle: {
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.60)',
    marginBottom: 5
  },
  priceStyle: {
    color: '#FFF',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700'
  },
  row: {
    color: 'red',
    justifyContent: 'space-between'
  },
  first: {
    justifyContent: 'space-between'
  }
})

export default Statistics
