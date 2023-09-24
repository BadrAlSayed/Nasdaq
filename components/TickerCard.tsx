import React from 'react'
import { StyleSheet, useColorScheme, Dimensions } from 'react-native'
import { View, Text } from './Themed'
import type { TickersResultData } from '../models/model'
import { DMSans_700Bold_Italic } from '@expo-google-fonts/dm-sans'

import { Link } from 'expo-router'

const TickerCard: React.FC<TickersResultData> = ({ data }) => {
  const screenWidth = Dimensions.get('window').width
  const itemWidth = (screenWidth - 60) / 2
  const themeColor = useColorScheme()

  return (
    <Link style={[styles.link]} href={`/${data.ticker}`}>
      <View style={[styles.container, { width: itemWidth }]}>
        <View style={styles.logo}>
          <Text style={styles.logoInitials}>{data.ticker.slice(0, 2)}</Text>
        </View>
        <Text style={styles.initials}>{data.ticker}</Text>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode='tail'>
          {data.name}
        </Text>
      </View>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#323443',
    gap: 10,
    backgroundColor: '#242639'
  },
  logo: {
    padding: 8,
    backgroundColor: '#2C2E45',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#323443',
    justifyContent: 'center'
  },
  logoInitials: {
    textAlign: 'center',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400'
  },
  initials: {
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
    fontSize: 12,
    // fontWeight: '400',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    color: 'rgba(255, 255, 255, 0.70)'
    // width: 130,
    // height: 15
  },
  link: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  }
})

export default TickerCard
