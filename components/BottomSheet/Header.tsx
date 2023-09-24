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
        <View style={styles.headerLeftItems}>
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
                style={styles.realLogo}
                resizeMode='contain'
              />
            </>
          )}

          <View style={styles.headerNumbers}>
            <Text style={styles.tickerText}>{ticker}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={[styles.textStyle, { paddingRight: 3 }]}
              >{`$${close.toFixed(2)}`}</Text>
              <Text style={[styles.textStyle, priceChange(close, open)[1]]}>
                {priceChange(close, open)[0]}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.headerRightItems}>
        <Link href='../'>
          <Image
            source={require('../../assets/images/Cancel3.png')}
            resizeMode='contain'
          />
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#2C2E45',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#323443',
    justifyContent: 'center',
    paddingHorizontal: 18
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerData: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logoInitials: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'DMSans_Regular',
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
  },
  headerNumbers: {
    paddingLeft: 15
  },
  headerLeftItems: {
    // alignItems: 'center',
    // gap: 15
    flexDirection: 'row'
  },
  headerRightItems: {
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  tickerText: {
    color: '#FFF',
    fontSize: 28,
    fontFamily: 'DMSans_Bold'
  },
  realLogo: {
    padding: 24,
    borderRadius: 5,

    alignSelf: 'center'
  },
  textStyle: {
    fontFamily: 'DMSans_Regular',
    fontSize: 15
  }
})

export default Header
