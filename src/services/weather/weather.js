import api from '../api'

export const getWeather = (lat, lon) => {
  return api.get(
    'https://api.openweathermap.org/data/2.5/onecall?&units=metric&exclude=current,minutely,hourly',
    {
      params: {
        appid: '9fcba578edc6bed9e3f357633bc962b6',
        lat,
        lon,
      },
    }
  )
}
