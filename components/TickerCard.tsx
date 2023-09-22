import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from './Themed'
import type { TickersResultData } from '../models/model'

import { Link } from 'expo-router'

const TickerCard: React.FC<TickersResultData> = ({ data }) => {
  return (
    <Link style={styles.link} href={`/${data.ticker}`}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.logoInitials}>{data.ticker.slice(0, 2)}</Text>
        </View>
        <Text style={styles.initials}>{data.ticker}</Text>
        <Text style={styles.name}>{data.name}</Text>
      </View>
    </Link>
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
    borderWidth: 0.5,
    borderColor: '#323443'
  },
  logo: {
    width: 35,
    height: 35,
    backgroundColor: '#2C2E45',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#323443',
    justifyContent: 'center'
  },
  logoInitials: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400'
  },
  initials: {
    width: 87,
    height: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 5
  },
  name: {
    borderRadius: 5,
    width: 130,
    height: 15,
    fontSize: 12,
    fontWeight: '400',
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  }
})

export default TickerCard
