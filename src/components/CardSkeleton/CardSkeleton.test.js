import React from 'react'
import { render, screen } from '@testing-library/react'
import CardSkeleton from './CardSkeleton'

describe('CardSkeleton', () => {
  it('should render all components', () => {
    render(<CardSkeleton />)

    expect(screen.getByTestId('skeleton')).not.toBeNull()
  })
})
