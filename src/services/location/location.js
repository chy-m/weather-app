import api from '../api'

export const getLocation = (location) => {
  console.log(location)
  return api.get('https://eu1.locationiq.com/v1/search.php', {
    params: {
      q: location,
      key: 'pk.293e9914e79907cf104752752cf30ab3',
      format: 'json',
    },
  })
}
