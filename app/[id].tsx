import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet, ActivityIndicator } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import React from 'react'
import { useQueryClient, useQuery, UseQueryResult } from '@tanstack/react-query'
import Header from '../components/BottomSheet/Header'
import About from '../components/BottomSheet/About'
import Statistics from '../components/BottomSheet/Statistics'
import type { PreviousClose, TickerDetails } from '../models/model'
import { useGlobalSearchParams } from 'expo-router'
import { getTicker, getTickerPrevClose } from '../api/Tickers'

export default function ModalScreen(): React.ReactElement {
  interface ParamProps {
    id: string
  }

  const params: ParamProps = useGlobalSearchParams()

  const tickerDetailsQuery: UseQueryResult<TickerDetails, undefined> = useQuery(
    {
      queryKey: ['details'],
      queryFn: async () => {
        return await getTicker(params.id)
      }
    }
  )

  const tickerPrevCloseQuery: UseQueryResult<PreviousClose, undefined> =
    useQuery({
      queryKey: ['prevClose'],
      queryFn: async () => {
        return await getTickerPrevClose(params.id)
      }
    })

  return (
    <View style={styles.container}>
      {console.log('ticker', tickerDetailsQuery)}
      {tickerDetailsQuery.isLoading ||
      tickerPrevCloseQuery.isLoading ||
      tickerDetailsQuery.isFetching ||
      tickerPrevCloseQuery.isFetching ? (
        <ActivityIndicator size='large' color='#FFF' />
      ) : (
        <>
          <Header
            tickerDetailsQuery={tickerDetailsQuery}
            tickerPrevCloseQuery={tickerPrevCloseQuery}
          />
          <View
            style={styles.separator}
            lightColor='#eee'
            darkColor='rgba(255,255,255,0.1)'
          />
          <About tickerDetailsQuery={tickerDetailsQuery} />
          <View
            style={styles.separator}
            lightColor='#eee'
            darkColor='rgba(255,255,255,0.1)'
          />
          <Statistics tickerPrevCloseQuery={tickerPrevCloseQuery} />
          <View
            style={styles.separator}
            lightColor='#eee'
            darkColor='rgba(255,255,255,0.1)'
          />

          <View style={styles.button}>
            <Text>Hello</Text>
          </View>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  logo: {
    width: 35,
    height: 35,
    backgroundColor: '#2C2E45',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#323443',
    marginRight: 3
  },
  first: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 350,
    height: 66
  },
  firstLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  firstRight: {
    // flexDirection: 'row'
  },
  second: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 350,
    height: 66
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'flex-start',

    width: 200,
    height: 66
  },
  button: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'red'
  }
})
