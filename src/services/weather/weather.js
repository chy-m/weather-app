import api from '../api'
import { OPEN_WEATHER_MAP_API_ENDPOINT, OPEN_WEATHER_MAP_API_KEY } from '../../config'

export const getWeather = (lat, lon) => {
  return api.get(OPEN_WEATHER_MAP_API_ENDPOINT, {
    params: {
      appid: OPEN_WEATHER_MAP_API_KEY,
      lat,
      lon,
    },
  })
}
