import { useState } from 'react'
import { useAsyncFn, useDebounce } from 'react-use'
import { getLocation as getLocationApi } from '../../services/location'
import { getWeather as getWeatherApi } from '../../services/weather'

/**
 * This hook tracks the callbacks and UI state of actions on the weather page.
 */
export function useWeather() {
  const [inputRef, setInputRef] = useState(null)
  const [search, setSearch] = useState('')

  const [getLocationState, getLocation] = useAsyncFn(async (...[search]) => {
    try {
      const { data } = await getLocationApi(search)

      return data
    } catch (error) {
      throw error
    }
  }, [])

  const [getWeatherState, getWeather] = useAsyncFn(async (...[lat, lon]) => {
    try {
      const { data } = await getWeatherApi(lat, lon)

      // For the next 8 days. We only want 7
      return data.daily.slice(0, -1)
    } catch (error) {
      throw error
    }
  }, [])

  const handleOnInputChange = (value) => {
    if (value) {
      setSearch(value)
    }
  }

  const handleOnSelect = (value) => {
    setSearch(value.display_name)

    getWeather(value.lat, value.lon)
  }

  useDebounce(
    () => {
      if (search === '') return

      getLocation(search)
    },
    500,
    [search]
  )

  return {
    inputRef,
    setInputRef,
    search,
    setSearch,
    getLocationState,
    getLocation,
    getWeatherState,
    getWeather,
    handleOnInputChange,
    handleOnSelect,
  }
}

export default useWeather
