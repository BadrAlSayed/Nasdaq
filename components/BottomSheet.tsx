import React from 'react'
import { StyleSheet, ActivityIndicator, Linking } from 'react-native'
import { View, Text } from './Themed'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import Header from './Header'
import About from './About'
import Statistics from './Statistics'
import Button from './Button'
import type { PreviousClose, TickerDetails } from '../models/model'
import { getTicker, getTickerPrevClose } from '../api/Tickers'

interface Props {
  ticker: string
  closeModal: () => void
}

const BottomSheetComponent: React.FC<Props> = ({ ticker, closeModal }) => {
  const tickerDetailsQuery: UseQueryResult<TickerDetails, undefined> = useQuery(
    {
      queryKey: ['details', ticker],
      queryFn: async () => {
        return await getTicker(ticker)
      }
    }
  )

  const tickerPrevCloseQuery: UseQueryResult<PreviousClose, undefined> =
    useQuery({
      queryKey: ['prevClose', ticker],
      queryFn: async () => {
        return await getTickerPrevClose(ticker)
      }
    })

  // renders
  return (
    <View style={styles.container}>
      {tickerDetailsQuery.isLoading ||
      tickerPrevCloseQuery.isLoading ||
      tickerDetailsQuery.isFetching ||
      tickerPrevCloseQuery.isFetching ? (
        <ActivityIndicator size='large' color='#FFF' />
      ) : tickerDetailsQuery.data?.status === 'ERROR' ? (
        <Text>Exceeded the maximum number of requests per minute</Text>
      ) : (
        <>
          <View>
            <Header
              logo={tickerDetailsQuery.data?.results.branding?.icon_url}
              ticker={
                (tickerDetailsQuery.data as TickerDetails)?.results.ticker
              }
              open={(tickerPrevCloseQuery.data as PreviousClose)?.results[0].o}
              close={(tickerPrevCloseQuery.data as PreviousClose)?.results[0].c}
              closeModal={closeModal}
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
              open={(tickerPrevCloseQuery.data as PreviousClose)?.results[0].o}
              close={(tickerPrevCloseQuery.data as PreviousClose)?.results[0].c}
              high={(tickerPrevCloseQuery.data as PreviousClose)?.results[0].h}
              low={(tickerPrevCloseQuery.data as PreviousClose)?.results[0].l}
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
                  (tickerDetailsQuery.data as TickerDetails).results
                    .homepage_url
                ).catch((error) => {
                  console.error('Failed to open URL:', error)
                })
              }}
            />
          </View>
        </>
      )}
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
export default BottomSheetComponent
