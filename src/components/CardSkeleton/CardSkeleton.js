import React from 'react'
import { CardContent } from '@material-ui/core'
import { StyledCard, StyledCardHead } from '../CameraCard/CameraCard.styles'
import Skeleton from '@material-ui/lab/Skeleton'

export const CardSkeleton = () => {
  return (
    <StyledCard>
      <StyledCardHead>
        <Skeleton animation='wave' variant='circle' width={80} height={80} data-testid='skeleton' />
        <Skeleton animation='wave' width='100%' height={50} />
      </StyledCardHead>
      <CardContent>
        <Skeleton animation='wave' width='95%' height={20} />
        <Skeleton animation='wave' width='65%' height={20} />
        <Skeleton animation='wave' width='85%' height={20} />
      </CardContent>
    </StyledCard>
  )
}

export default CardSkeleton
