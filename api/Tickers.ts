import type { Tickers, TickerDetails, PreviousClose } from '../models/model'

const API_KEY = process.env.EXPO_PUBLIC_API_KEY
const API = process.env.EXPO_PUBLIC_API

export const getTickers = async (
  pageParam?: string,
  debouncedSearchTerm?: string
): Promise<Tickers> => {
  const endpoint = pageParam
    ? `${pageParam}&apikey=${API_KEY}`
    : `${API}/tickers`
  const query = debouncedSearchTerm ? `/search/${debouncedSearchTerm}` : ''
  console.log('ecn', `${endpoint}${query}`)
  try {
    const response = await fetch(`${endpoint}${query}`)
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getTicker = async (ticker: string): Promise<TickerDetails> => {
  try {
    const response = await fetch(`${API}/tickers/${ticker}/details`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getTickerPrevClose = async (
  ticker: string
): Promise<PreviousClose> => {
  try {
    const response = await fetch(`${API}/tickers/${ticker}/prevClose`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
