import type { Tickers, TickerDetails } from '../models/model'

const API_URL = process.env.EXPO_PUBLIC_API_URL
const API_KEY = process.env.EXPO_PUBLIC_API_KEY

export const getTickers = async (): Promise<Tickers> => {
  const response = await fetch(
    `${API_URL}/tickers?exchange=XNAS&active=true&apikey=${API_KEY}`
  )
  const data = await response.json()
  return data
}

export const getTicker = async (ticker: string): Promise<TickerDetails> => {
  const response = await fetch(`${API_URL}/tickers/${ticker}?apikey=${API_KEY}`)
  const data = await response.json()
  return data
}
