import React from 'react'
import { flushPromises } from '../../utils/test-helpers'
import { render, fireEvent, screen, act } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import Works from './Weather'
import { CAMERAS_QUERY } from '../../services/works/queries'

const works = [
  {
    id: 1,
    exif: {
      isoSpeedRatings: '100',
      make: 'NIKON CORPORATION',
      model: 'NIKON D80',
      software: 'Adobe Photoshop CS3 Macintosh',
    },
    urls: [
      {
        type: 'small',
        link: 'link',
      },
    ],
  },
  {
    id: 2,
    exif: {
      isoSpeedRatings: '120',
      make: 'Canon',
      model: 'Canon EOS 20D',
      software: 'Adobe Photoshop CS Windows',
    },
    urls: [
      {
        type: 'small',
        link: 'link',
      },
    ],
  },
]

const mocks = [
  {
    request: {
      query: CAMERAS_QUERY,
    },
    result: {
      data: {
        works,
      },
    },
  },
]

const errorMocks = [
  {
    request: {
      query: CAMERAS_QUERY,
    },
    error: new Error('An error occurred'),
  },
]

describe('Works', () => {
  it('should render correct amount of cards and checkboxes', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <Works />
      </MockedProvider>
    )

    await act(async () => {
      await flushPromises()
    })

    expect(screen.queryAllByTestId('camera-card').length).toEqual(works.length)
    expect(screen.queryAllByTestId('make-checkbox').length).toEqual(
      works.length
    )
    expect(screen.queryAllByTestId('model-checkbox').length).toEqual(
      works.length
    )
  })

  it('should filter cameras by make when user selects a make checkbox', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <Works />
      </MockedProvider>
    )

    await act(async () => {
      await flushPromises()
    })

    expect(screen.queryAllByTestId('camera-card').length).toEqual(works.length)

    fireEvent.click(screen.getByLabelText(works[0].exif.make))

    expect(screen.queryAllByTestId('camera-card').length).toEqual(1)
  })

  it('should filter cameras by model when user selects a model checkbox', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <Works />
      </MockedProvider>
    )

    await act(async () => {
      await flushPromises()
    })

    expect(screen.queryAllByTestId('camera-card').length).toEqual(works.length)

    fireEvent.click(screen.getByLabelText(works[0].exif.model))

    expect(screen.queryAllByTestId('camera-card').length).toEqual(1)
  })

  it('should render error state when api returns an error status', async () => {
    render(
      <MockedProvider mocks={errorMocks}>
        <Works />
      </MockedProvider>
    )

    await act(async () => {
      await flushPromises()
    })

    expect(
      screen.getByText(
        'Oops, looks like something has gone wrong. Please try again'
      )
    ).not.toBeNull()
  })
})
