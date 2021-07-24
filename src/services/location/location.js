import api from '../api'
import { LOCATION_IQ_API_ENDPOINT, LOCATION_IQ_API_KEY } from '../../config'

export const getLocation = (location) => {
  return api.get(LOCATION_IQ_API_ENDPOINT, {
    params: {
      q: location,
      key: LOCATION_IQ_API_KEY,
      format: 'json',
    },
  })
}
