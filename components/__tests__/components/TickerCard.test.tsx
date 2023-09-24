import { render, screen } from '@testing-library/react-native'
import React from 'react'
import TickerCard from '../../TickerCard'

describe('TickerCard', () => {
  it('should render the correct ticker title and name', () => {
    render(<TickerCard ticker='AAPL' name='Apple Inc' />)
    expect(screen.getByText('AA')).toBeTruthy()
    expect(screen.getByText('AAPL')).toBeTruthy()
    expect(screen.getByText('Apple Inc')).toBeTruthy()
  })
})
