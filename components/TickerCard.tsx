import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { View, Text } from './Themed'
import { Link } from 'expo-router'

interface Props {
  ticker: string
  name: string
}

const TickerCard: React.FC<Props> = ({ ticker, name }) => {
  const screenWidth = Dimensions.get('window').width
  const itemWidth = (screenWidth - 60) / 2

  return (
    <Link style={[styles.link]} href={`/${ticker}`}>
      <View style={[styles.container, { width: itemWidth }]}>
        <View style={styles.logo}>
          <Text style={styles.logoInitials}>{ticker.slice(0, 2)}</Text>
        </View>
        <Text style={styles.initials}>{ticker}</Text>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode='tail'>
          {name}
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
    backgroundColor: '#242639',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#323443',
    justifyContent: 'center'
  },
  logoInitials: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'DMSans_Regular'
  },
  initials: {
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'DMSans_Bold',
    marginVertical: 5
  },
  name: {
    borderRadius: 5,
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    color: 'rgba(255, 255, 255, 0.70)',
    fontFamily: 'DMSans_Regular'
  },
  link: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  }
})

export default TickerCard
