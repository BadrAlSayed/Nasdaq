import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Text, View } from '../Themed'
import { type UseQueryResult } from '@tanstack/react-query'
import type { PreviousClose, TickerDetails } from '../../models/model'
import { Link } from 'expo-router'

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
      <View style={styles.headerData}>
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
          <Text>{(tickerPrevCloseQuery.data as PreviousClose).ticker}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ paddingRight: 3 }}>
              {`$${tickerPrevClose.c.toFixed(2)}`}
            </Text>
            <Text style={priceChange(tickerPrevClose.c, tickerPrevClose.o)[1]}>
              {priceChange(tickerPrevClose.c, tickerPrevClose.o)[0]}
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
