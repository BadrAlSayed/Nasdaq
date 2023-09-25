import { render, screen } from '@testing-library/react-native'
import React from 'react'
import TickerCard from '../../TickerCard'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

const TickerCardProvided: React.FC = () => {
  return (
    <BottomSheetModalProvider>
      <TickerCard ticker='AAPL' name='Apple Inc' />
    </BottomSheetModalProvider>
  )
}

describe('TickerCard', () => {
  it('should render the correct ticker title and name', () => {
    render(<TickerCardProvided />)
    expect(screen.getByText('AA')).toBeTruthy()
    expect(screen.getByText('AAPL')).toBeTruthy()
    expect(screen.getByText('Apple Inc')).toBeTruthy()
  })
})
