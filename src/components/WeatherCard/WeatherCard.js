import React from 'react'
import { Typography } from '@material-ui/core'
import {
  StyledCard,
  StyledCardHead,
  StyledDate,
  StyledImage,
  StyledCardContent,
  StyledDivider,
} from './WeatherCard.styles'
import IconClearSky from '../../assets/icons/clear-day.svg'
import IconFewClouds from '../../assets/icons/few-clouds.svg'
import IconScatteredClouds from '../../assets/icons/scattered-clouds.svg'
import IconBrokenClouds from '../../assets/icons/broken-clouds.svg'
import IconShowerRain from '../../assets/icons/shower-rain.svg'
import IconRain from '../../assets/icons/rain.svg'
import IconThunderstorm from '../../assets/icons/thunderstorm.svg'
import IconSnow from '../../assets/icons/snow.svg'
import IconMist from '../../assets/icons/mist.svg'

export const weatherIconMap = {
  '01d': IconClearSky,
  '02d': IconFewClouds,
  '03d': IconScatteredClouds,
  '04d': IconBrokenClouds,
  '09d': IconShowerRain,
  '10d': IconRain,
  '11d': IconThunderstorm,
  '13d': IconSnow,
  '50d': IconMist,
}

export const WeatherCard = ({ date, title, icon, min, max }) => {
  return (
    <StyledCard>
      <StyledCardHead>
        <StyledDate component='h4'>{date}</StyledDate>
        <StyledImage src={weatherIconMap[icon]} alt={title} />
        <Typography variant='h5' component='h2'>
          {title}
        </Typography>
      </StyledCardHead>
      <StyledCardContent>
        <Typography variant='body2' color='textSecondary' component='p' align='center'>
          {max}
        </Typography>
        <StyledDivider variant='middle' />
        <Typography variant='body2' color='textSecondary' component='p' align='center'>
          {min}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  )
}

export default WeatherCard
