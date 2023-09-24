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
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start'

    paddingBottom: 0,

    width: '100%'
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
    backgroundColor: 'red'
  },
  priceTitle: {
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.60)'
    // marginBottom: 5
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
