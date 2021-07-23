import React, { useMemo, useState } from 'react'
import { useAsyncFn, useEffectOnce, useDebounce, useAsync } from 'react-use'
// import { useQuery } from '@apollo/client'
// import CameraCard from '../../components/CameraCard'
// import CardSkeleton from '../../components/CardSkeleton'
// import Filters from '../../components/Filters'
// import FiltersSkeleton from '../../components/FiltersSkeleton'
// import ErrorState from '../../components/ErrorState'
import { StyledWorks, StyledItems } from './Weather.styles'
import { Autocomplete, TextField } from '@material-ui/core'
import { getLocation as getLocationApi } from '../../services/location'
import { getWeather as getWeatherApi } from '../../services/weather'
import Downshift from 'downshift'
import WeatherCard from '../../components/WeatherCard'
import { format, addDays } from 'date-fns'

export const Weather = () => {
  const [search, setSearch] = useState(null)
  const [location, setLocation] = useState(null)
  const [inputRef, setInputRef] = useState(null)
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

      return data.daily
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
      if (search === null) return

      getLocation(search)
    },
    500,
    [search]
  )

  console.log(search)
  return (
    <StyledWorks>
      <Downshift
        onChange={handleOnSelect}
        onInputValueChange={handleOnInputChange}
        itemToString={(item) => (item ? item.title : '')}
        inputValue={search}
      >
        {({
          getRootProps,
          selectedItem,
          getInputProps,
          getItemProps,
          highlightedIndex,
          isOpen,
          inputValue,
          getLabelProps,
        }) => (
          <div>
            <TextField
              {...getInputProps()}
              ref={(element) => setInputRef(element)}
              style={{ margin: 8 }}
              placeholder='Placeholder'
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
              variant='outlined'
              inputValue={inputValue || undefined}
            />
            {isOpen ? (
              <div>
                {getLocationState.value &&
                  getLocationState.value.map((item, index) => (
                    <div
                      {...getItemProps({ key: index, index, item })}
                      style={{
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      }}
                    >
                      {item.display_name}
                    </div>
                  ))}
                {console.log(getLocationState.value)}
              </div>
            ) : null}
          </div>
        )}
      </Downshift>

      <StyledItems>
        {getWeatherState.value &&
          getWeatherState.value.map((item, index) => (
            <WeatherCard
              date={format(addDays(new Date(), index), 'EEEE do LLLL')}
              title={item.weather[0].main}
              icon={item.weather[0].icon}
              min={item.temp.min}
              max={item.temp.max}
            />
          ))}
      </StyledItems>
    </StyledWorks>
  )
}

// temp: {
//   day: 10.33
// eve: 9.32
// max: 10.33
// min: 7.28
// morn: 7.7

// }

// weather: {
//   description: "moderate rain"
// icon: "10d"
// id: 501
// main: "Rain"
// }

export default Weather
