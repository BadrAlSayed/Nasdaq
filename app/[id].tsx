import { StyleSheet, ActivityIndicator, Linking } from 'react-native'

import { Text, View } from '../components/Themed'

import React from 'react'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import Header from '../components/BottomSheet/Header'
import About from '../components/BottomSheet/About'
import Statistics from '../components/BottomSheet/Statistics'
import Button from '../components/Button'
import type { PreviousClose, TickerDetails } from '../models/model'
import { useLocalSearchParams } from 'expo-router'
import { getTicker, getTickerPrevClose } from '../api/Tickers'

export default function ModalScreen(): React.ReactElement {
  interface ParamProps {
    id: string
  }

  const params = useLocalSearchParams() as ParamProps

  const tickerDetailsQuery: UseQueryResult<TickerDetails, undefined> = useQuery(
    {
      queryKey: ['details', params.id],
      queryFn: async () => {
        return await getTicker(params.id)
      }
    }
  )

  const tickerPrevCloseQuery: UseQueryResult<PreviousClose, undefined> =
    useQuery({
      queryKey: ['prevClose', params.id],
      queryFn: async () => {
        return await getTickerPrevClose(params.id)
      }
    })

  if (
    tickerDetailsQuery.isLoading ||
    tickerPrevCloseQuery.isLoading ||
    tickerDetailsQuery.isFetching ||
    tickerPrevCloseQuery.isFetching
  )
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator size='large' color='#FFF' />
      </View>
    )
  if (tickerDetailsQuery.data?.status === 'ERROR')
    return (
      <View style={styles.containerLoading}>
        <Text>Exceeded the maximum number of requests per minute</Text>
      </View>
    )
  return (
    <View style={styles.container}>
      <View>
        <Header
          logo={tickerDetailsQuery.data?.results.branding?.icon_url}
          ticker={(tickerDetailsQuery.data as TickerDetails)?.results.ticker}
          open={(tickerPrevCloseQuery.data as PreviousClose).results[0].o}
          close={(tickerPrevCloseQuery.data as PreviousClose).results[0].c}
        />
        <View>
          <View
            style={styles.separator}
            lightColor='#eee'
            darkColor='rgba(255,255,255,0.1)'
          />
        </View>
        <About
          tickerDescription={
            (tickerDetailsQuery.data as TickerDetails)?.results.description
          }
        />
        <View>
          <View
            style={styles.separator}
            lightColor='#eee'
            darkColor='rgba(255,255,255,0.1)'
          />
        </View>
        <Statistics
          open={(tickerPrevCloseQuery.data as PreviousClose).results[0].o}
          close={(tickerPrevCloseQuery.data as PreviousClose).results[0].c}
          high={(tickerPrevCloseQuery.data as PreviousClose).results[0].h}
          low={(tickerPrevCloseQuery.data as PreviousClose).results[0].l}
        />
        <View>
          <View
            style={styles.separator}
            lightColor='#eee'
            darkColor='rgba(255,255,255,0.1)'
          />
        </View>
      </View>

      <View style={styles.button}>
        <Button
          title='View Website'
          isDisabled={
            tickerDetailsQuery.data?.results.homepage_url === undefined
          }
          handlePress={() => {
            Linking.openURL(
              (tickerDetailsQuery.data as TickerDetails).results.homepage_url
            ).catch((error) => {
              console.error('Failed to open URL:', error)
            })
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '100%',
    height: '100%'
  },

  separator: {
    height: 1,
    width: '100%',
    marginVertical: 20
  },
  button: {
    marginTop: 'auto',
    marginBottom: 25
  },
  containerLoading: {
    display: 'flex',
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  }
})
