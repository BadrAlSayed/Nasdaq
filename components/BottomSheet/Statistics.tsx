import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from '../Themed'

interface Props {
  open: number
  close: number
  high: number
  low: number
}
const Statistics: React.FC<Props> = ({ open, close, high, low }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>STATISTICS</Text>
      <View style={styles.price}>
        <View style={styles.first}>
          <View style={styles.one}>
            <Text style={[styles.priceTitle]}>Open</Text>
            <Text style={styles.priceStyle}>{`$${open?.toFixed(2)}`}</Text>
          </View>
          <View style={styles.one}>
            <Text style={[styles.priceTitle]}>High</Text>
            <Text style={styles.priceStyle}>{`$${high?.toFixed(2)}`}</Text>
          </View>
        </View>
        <View style={styles.first}>
          <View style={styles.one}>
            <Text style={styles.priceTitle}>Close</Text>
            <Text style={styles.priceStyle}>{`$${close?.toFixed(2)}`}</Text>
          </View>
          <View style={styles.one}>
            <Text style={styles.priceTitle}>Low</Text>
            <Text style={styles.priceStyle}>{`$${low?.toFixed(2)}`}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
    width: '100%'
  },
  title: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'DMSans_Bold',
    marginBottom: 15
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceTitle: {
    fontSize: 15,
    fontFamily: 'DMSans_Regular',
    color: 'rgba(255, 255, 255, 0.60)'
  },
  priceStyle: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'DMSans_Bold'
  },
  row: {
    color: 'red',
    justifyContent: 'space-between'
  },
  first: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 15,
    alignSelf: 'stretch',
    width: '50%'
  },
  one: {
    // width: '100%',
    gap: 5,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
})

export default Statistics
