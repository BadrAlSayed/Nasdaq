import type { Tickers, TickerDetails, PreviousClose } from '../models/model'

const API_URL = process.env.EXPO_PUBLIC_API_URL
const API_KEY = process.env.EXPO_PUBLIC_API_KEY

export const getTickers = async (
  pageParam?: string,
  debouncedSearchTerm?: string
): Promise<Tickers> => {
  const endpoint = pageParam
    ? `${pageParam}&apikey=${API_KEY}`
    : `${API_URL}/v3/reference/tickers?exchange=XNAS&active=true&apikey=${API_KEY}`
  const query = debouncedSearchTerm ? `&search=${debouncedSearchTerm}` : ''

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
    const response = await fetch(
      `${API_URL}/v3/reference/tickers/${ticker}?apikey=${API_KEY}`
    )
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
    const response = await fetch(
      `${API_URL}/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=${API_KEY}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
