import React from 'react'
import { CardContent } from '@material-ui/core'
import { StyledCard, StyledCardHead } from '../WeatherCard/WeatherCard.styles'
import { StyledSkeleton } from './CardSkeleton.styles'
import { Skeleton } from '@material-ui/lab'

export const CardSkeleton = () => {
  return (
    <StyledCard>
      <StyledCardHead>
        <Skeleton animation='wave' width='100%' height={70} data-testid='skeleton' />
        <StyledSkeleton animation='wave' variant='circle' width={70} height={70} data-testid='skeleton' />
        <Skeleton animation='wave' width='100%' height={40} />
      </StyledCardHead>
      <CardContent>
        <Skeleton animation='wave' width='100%' height={10} />
        <Skeleton animation='wave' width='100%' height={5} />
        <Skeleton animation='wave' width='100%' height={10} />
      </CardContent>
    </StyledCard>
  )
}

export default CardSkeleton
