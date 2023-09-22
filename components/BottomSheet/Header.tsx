import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Text, View } from '../Themed'
import { type UseQueryResult } from '@tanstack/react-query'
import type { PreviousClose, TickerDetails } from '../../models/model'

interface HeaderProps {
  tickerDetailsQuery: UseQueryResult<TickerDetails, undefined>
  tickerPrevCloseQuery: UseQueryResult<PreviousClose, undefined>
}

const Header: React.FC<HeaderProps> = ({
  tickerDetailsQuery,
  tickerPrevCloseQuery
}) => {
  const API_KEY = process.env.EXPO_PUBLIC_API_KEY

  const tickerDetails = (tickerDetailsQuery.data as TickerDetails).results
  const tickerPrevClose = (tickerPrevCloseQuery.data as PreviousClose)
    .results[0]

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
      <View style={styles.firstLeft}>
        {tickerDetails?.branding?.icon_url === undefined ? (
          <>
            <View style={styles.logo}>
              <Text style={styles.logoInitials}>
                {(
                  tickerDetailsQuery.data as TickerDetails
                )?.results?.ticker.slice(0, 2)}
              </Text>
            </View>
          </>
        ) : (
          <>
            <Image
              source={{
                uri: `${tickerDetails?.branding?.icon_url}?apiKey=${API_KEY}`
              }}
              style={{ width: 45, height: 45 }}
              resizeMode='contain'
            />
          </>
        )}

        <View>
          <Text>{(tickerPrevCloseQuery.data as PreviousClose)?.ticker}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ paddingRight: 3 }}>
              {`$${(
                tickerPrevCloseQuery.data as PreviousClose
              )?.results[0]?.c?.toFixed(2)}`}
            </Text>
            <Text
              style={priceChange(tickerPrevClose?.c, tickerPrevClose?.o)[1]}
            >
              {priceChange(tickerPrevClose?.c, tickerPrevClose?.o)[0]}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.firstRight}>
        <Text>Cancel</Text>
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
  firstLeft: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    width: 150
  },
  firstRight: {
    // flexDirection: 'row'
  },
  initials: {
    width: 50,
    height: 20,
    borderRadius: 5,
    backgroundColor: '#2C2E45',
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: '#323443'
  },
  name: {
    width: 30,
    height: 16,
    borderRadius: 5,
    backgroundColor: '#2C2E45',
    borderWidth: 0.5,
    borderColor: '#323443'
  },
  logo1: {
    width: 45,
    height: 45,
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
  }
})

export default Header
