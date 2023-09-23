import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Text, View } from '../Themed'
import { Link } from 'expo-router'

interface HeaderProps {
  logo: string | undefined
  ticker: string
  open: number
  close: number
}

const Header: React.FC<HeaderProps> = ({ logo, ticker, open, close }) => {
  const API_KEY = process.env.EXPO_PUBLIC_API_KEY

  const priceChange = (close: number, open: number): [string, object] => {
    const change = ((close - open) / open) * 100
    if (change > 0) {
      return [`+${change.toFixed(2)}`, styles.positive]
    } else if (change < 0) {
      return [change.toFixed(2), styles.negative]
    } else {
      return [change.toFixed(2), styles.zero]
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerData}>
        {logo === undefined ? (
          <>
            <View style={styles.logo}>
              <Text style={styles.logoInitials}>{ticker.slice(0, 2)}</Text>
            </View>
          </>
        ) : (
          <>
            <Image
              source={{
                uri: `${logo}?apiKey=${API_KEY}`
              }}
              style={{ width: 45, height: 45 }}
              resizeMode='contain'
            />
          </>
        )}

        <View>
          <Text>{ticker}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ paddingRight: 3 }}>{`$${close.toFixed(2)}`}</Text>
            <Text style={priceChange(close, open)[1]}>
              {priceChange(close, open)[0]}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Link href='../'>
          <View style={styles.closeButton}>
            <Text style={styles.closeButtonText}>x</Text>
          </View>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 45,
    height: 45,
    backgroundColor: '#2C2E45',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#323443',
    justifyContent: 'center'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 350,
    height: 66
  },
  headerData: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    width: 150
  },
  logoInitials: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    justifyContent: 'center'
  },
  positive: {
    color: 'green'
  },
  negative: {
    color: 'red'
  },
  zero: {
    color: 'grey'
  },
  closeButton: {
    borderRadius: 50,
    borderColor: '#323443',
    borderWidth: 1,
    backgroundColor: '#242639',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButtonText: {
    paddingHorizontal: 8,
    fontSize: 20
  },
  closee: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#242639'
  }
})

export default Header
