import { render, screen } from '@testing-library/react-native'
import React from 'react'
import Statistics from '../../BottomSheet/Statistics'

describe('About', () => {
  it('should render the correct statistics values', () => {
    render(<Statistics open={2.34} close={1.98} high={7.34} low={6.5} />)
    expect(screen.getByText(/2.34/)).toBeTruthy()
    expect(screen.getByText(/1.98/)).toBeTruthy()
    expect(screen.getByText(/7.34/)).toBeTruthy()
    expect(screen.getByText(/6.5/)).toBeTruthy()
  })
})
