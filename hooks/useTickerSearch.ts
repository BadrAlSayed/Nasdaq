import { useState, useEffect } from 'react'
import {
  type InfiniteData,
  useInfiniteQuery,
  type InfiniteQueryObserverResult
} from '@tanstack/react-query'
import { getTickers } from '../api/Tickers'
import type { Tickers } from '../models/model'

interface Props {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  data: InfiniteData<Tickers> | undefined
  fetchNextPage: () => Promise<InfiniteQueryObserverResult<Tickers, unknown>>
  hasNextPage: boolean | undefined
  isLoading: boolean
  isError: boolean
}
const useTickersSearch = (): Props => {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 500)

    return () => {
      clearTimeout(timerId)
    }
  }, [searchTerm])

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ['tickers', debouncedSearchTerm],
      queryFn: async ({ pageParam }) =>
        await getTickers(pageParam, debouncedSearchTerm),
      getNextPageParam: (lastPage, allPages) => lastPage.next_url
    })

  return {
    searchTerm,
    setSearchTerm,
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError
  }
}

export default useTickersSearch
