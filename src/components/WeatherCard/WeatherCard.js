import React from 'react'
import { Typography } from '@material-ui/core'
import {
  StyledCard,
  StyledCardHead,
  StyledIcon,
  StyledCardMedia,
  StyledCardContent,
} from './WeatherCard.styles'
import {
  IconBrokenClouds,
  IconClearSky,
  IconFewClouds,
  IconMist,
  IconRain,
  IconScatteredClouds,
  IconShowerRain,
  IconSnow,
  IconThunderstorm,
} from '../../components/Icons'

export const weatherIconMap = {
  '01d': IconClearSky,
  '02d': IconFewClouds,
  '03d': IconScatteredClouds,
  '04d': IconBrokenClouds,
  '09d': IconRain,
  '10d': IconShowerRain,
  '11d': IconThunderstorm,
  '13d': IconSnow,
  '50d': IconMist,
}

export const WeatherCard = ({ date, title, icon, min, max }) => {
  const Icon = weatherIconMap[icon]

  return (
    <StyledCard data-testid='weather-card'>
      <StyledCardHead>
        <Typography gutterBottom variant='h5' component='h2'>
          {date}
        </Typography>
        <StyledIcon>
          <Icon />
        </StyledIcon>
        <Typography gutterBottom variant='h5' component='h2'>
          {title}
        </Typography>
      </StyledCardHead>
      <StyledCardContent>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          align='left'
        >
          {min}
        </Typography>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          align='left'
        >
          {max}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  )
}

export default WeatherCard
