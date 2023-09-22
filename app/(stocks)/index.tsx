import { ScrollView, StyleSheet, FlatList } from 'react-native'
import React from 'react'
// import EditScreenInfo from '../../components/EditScreenInfo'
import { View, Text } from '../../components/Themed'
import LoadingCard from '../../components/LoadingCard'
import SearchBar from '../../components/SearchBar'
import { getTickers } from '../../api/Tickers'
import { useQuery } from '@tanstack/react-query'
import TickerCard from '../../components/TickerCard'

export default function Home(): React.ReactElement {
  const tickersQuery = useQuery({
    queryKey: ['tickers'],
    queryFn: getTickers
  })

  const [searchTerm, setSearchTerm] = React.useState('')

  const filteredData = tickersQuery.data?.results?.filter(
    (stock) =>
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.ticker.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <View style={styles.container}>
      <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      {tickersQuery.isLoading ? (
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
      ) : tickersQuery.isError ? (
        <Text>Error</Text>
      ) : (
        <FlatList
          data={filteredData}
          numColumns={2}
          keyExtractor={(item) => item.ticker}
          renderItem={({ item }) => <TickerCard data={item} />}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
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
  },
  card: {
    width: 165,
    height: 131
  }
})
