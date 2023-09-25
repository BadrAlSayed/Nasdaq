import { render, screen } from '@testing-library/react-native'
import React from 'react'
import About from '../../About'

describe('About', () => {
  it('should render the correct ticker description', () => {
    render(<About tickerDescription='Hello test' />)
    expect(screen.getByText('Hello test')).toBeTruthy()
  })
})
