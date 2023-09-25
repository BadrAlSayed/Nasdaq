import { render, screen } from '@testing-library/react-native'
import React from 'react'
import Header from '../../Header'

describe('About', () => {
  it('should render ticker name', () => {
    render(<Header logo={undefined} ticker='AAPL' open={1.45} close={2.56} />)
    expect(screen.getByText('AAPL')).toBeTruthy()
  })
  it('should render ticker initials if there is no logo', () => {
    render(<Header logo={undefined} ticker='AAPL' open={1.45} close={2.56} />)
    expect(screen.getByText('AA')).toBeTruthy()
  })
  it('should display correct change percentage', () => {
    render(<Header logo={undefined} ticker='AAPL' open={1.45} close={2.56} />)
    expect(screen.getByText(/76.55/)).toBeTruthy()
  })
})
