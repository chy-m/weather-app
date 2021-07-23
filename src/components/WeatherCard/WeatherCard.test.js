import React from 'react'
import { render, screen } from '@testing-library/react'
import CameraCard from './CameraCard'

describe('CameraCard', () => {
  const image = 'image'
  const title = 'title'
  const make = 'Canon'
  const software = 'software'
  const isoSpeedRatings = 'isoSpeedRatings'

  it('should render all components', () => {
    render(<CameraCard image={image} title={title} make={make} software={software} isoSpeedRatings={isoSpeedRatings} />)

    expect(screen.getByTestId('card-image')).not.toBeNull()
    expect(screen.getByText(title)).not.toBeNull()
    expect(screen.queryAllByText(make)).not.toBeNull()
    expect(screen.queryAllByText(software)).not.toBeNull()
    expect(screen.queryAllByText(isoSpeedRatings)).not.toBeNull()
  })

  it('should not render image when image is not passed', () => {
    render(<CameraCard image={null} title={title} make={make} software={software} isoSpeedRatings={isoSpeedRatings} />)

    expect(screen.queryByTestId('card-image')).toBeNull()
  })

  it('should render alternative titles when make and title are not passed', () => {
    render(
      <CameraCard
        image={image}
        title={undefined}
        make={undefined}
        software={software}
        isoSpeedRatings={isoSpeedRatings}
      />
    )

    expect(screen.getByText('Unknown Model')).not.toBeNull()
    expect(screen.queryAllByText('Unknown Make')).not.toBeNull()
  })

  it('should not render iso speed rating when prop is not passed', () => {
    render(<CameraCard image={image} title={undefined} make={undefined} software={software} isoSpeedRatings={null} />)

    expect(screen.queryAllByText('Iso speed ratings -').length).toEqual(0)
  })
})
