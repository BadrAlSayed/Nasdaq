import { ScrollView, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
// import EditScreenInfo from '../../components/EditScreenInfo'
import { View, Text } from '../../components/Themed'
import LoadingCard from '../../components/LoadingCard'
import SearchBar from '../../components/SearchBar'
import { getTickers } from '../../api/Tickers'
import { useInfiniteQuery } from '@tanstack/react-query'
import TickerCard from '../../components/TickerCard'

import { debounce } from 'lodash'

export default function Home(): React.ReactElement {
  // const tickersQuery = useQuery({
  //   queryKey: ['tickers'],
  //   queryFn: getTickers
  // })

  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const debouncedSetSearchTerm = debounce((text: string) => {
    setDebouncedSearchTerm(text)
  }, 500)
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ['tickers', debouncedSearchTerm],
      queryFn: ({ pageParam }) => getTickers(pageParam, debouncedSearchTerm),
      getNextPageParam: (lastPage, allPages) => lastPage.next_url
    })

  // console.log('Work', data)

  return (
    <View style={styles.container}>
      <SearchBar
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        debouncedSetSearchTerm={debouncedSetSearchTerm}
      />
      {/* {console.log('data', data?.pages.results)} */}
      {isLoading ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.row}>
            <LoadingCard />
            <LoadingCard />
          </View>
          <View style={styles.row}>
            <LoadingCard />
            <LoadingCard />
          </View>
          <View style={styles.row}>
            <LoadingCard />
            <LoadingCard />
          </View>
          <View style={styles.row}>
            <LoadingCard />
            <LoadingCard />
          </View>
          <View style={styles.row}>
            <LoadingCard />
            <LoadingCard />
          </View>
        </ScrollView>
      ) : isError ? (
        <Text>Error</Text>
      ) : data.pages[0].status === 'ERROR' ? (
        <Text>Exceeded the maximum number of requests per minute</Text>
      ) : (
        <>
          {/* {console.log('filtered', tickersQuery.data)} */}
          <FlatList
            data={data.pages.flatMap((page) => page.results)}
            numColumns={2}
            keyExtractor={(item) => item.ticker}
            renderItem={({ item }) => <TickerCard data={item} />}
            onEndReachedThreshold={0.3}
            onEndReached={() => {
              if (hasNextPage) {
                fetchNextPage().catch((error) => {
                  console.log('error', error)
                })
              }
            }}
          />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'flex-start'
    height: '100%',
    width: '100%',

    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    flexShrink: 0
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
  row: {
    flexDirection: 'row'
  }
})
