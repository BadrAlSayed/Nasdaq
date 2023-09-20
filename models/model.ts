export interface Tickers {
  count: number
  next_url: string
  request_id: string
  results: TickersResult[]
  status: string
}

export interface TickersResultData {
  data: TickersResult
}

export interface TickersResult {
  active: boolean
  cik: string
  composite_figi: string
  currency_name: string
  last_updated_utc: string
  locale: string
  market: string
  name: string
  primary_exchange: string
  share_class_figi: string
  ticker: string
  type: string
}

export interface TickerDetails {
  request_id: string
  results: TickerDetailsResults
  status: string
}

export interface TickerDetailsResults {
  ticker: string
  name: string
  market: string
  locale: string
  primary_exchange: string
  type: string
  active: boolean
  currency_name: string
  cik: string
  composite_figi: string
  share_class_figi: string
  market_cap: number
  phone_number: string
  address: Address
  description: string
  sic_code: string
  sic_description: string
  ticker_root: string
  homepage_url: string
  total_employees: number
  list_date: string
  branding: Branding
  share_class_shares_outstanding: number
  weighted_shares_outstanding: number
  round_lot: number
}

export interface Branding {
  logo_url: string
  icon_url: string
}

export interface Address {
  address1: string
  city: string
  state: string
  postal_code: string
}
