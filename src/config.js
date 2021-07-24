export const LOCATION_IQ_API_KEY = process.env.REACT_APP_LOCATION_IQ_API_KEY || '#{LOCATION_IQ_API_KEY}#'
export const OPEN_WEATHER_MAP_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY || '#{OPEN_WEATHER_MAP_API_KEY}#'

export const LOCATION_IQ_API_ENDPOINT = 'https://eu1.locationiq.com/v1/search.php'
export const OPEN_WEATHER_MAP_API_ENDPOINT =
  'https://api.openweathermap.org/data/2.5/onecall?&units=metric&exclude=current,minutely,hourly'
