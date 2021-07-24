import React from 'react'
import Downshift from 'downshift'
import { format, addDays } from 'date-fns'
import useWeather from './useWeather'
import WeatherCard from '../../components/WeatherCard'
import CardSkeleton from '../../components/CardSkeleton'
import { StyledCircularProgress, StyledDropdown, StyledWorks, StyledItems } from './Weather.styles'
import { MenuItem, Popper, TextField } from '@material-ui/core'

export const Weather = () => {
  const {
    inputRef,
    setInputRef,
    search,
    setSearch,
    getLocationState,
    getWeatherState,
    handleOnInputChange,
    handleOnSelect,
  } = useWeather()

  return (
    <StyledWorks>
      <Downshift
        onChange={handleOnSelect}
        onInputValueChange={handleOnInputChange}
        itemToString={(item) => (item ? item.title : '')}
        inputValue={search}
      >
        {({ getInputProps, getMenuProps, getItemProps, highlightedIndex, isOpen, inputValue, getLabelProps }) => (
          <div>
            <TextField
              {...getInputProps({
                onChange: (e) => {
                  if (e.target.value === '') {
                    setSearch('')
                  }
                },
              })}
              ref={(element) => setInputRef(element)}
              label='Search for a location ☀️'
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
              variant='outlined'
              InputProps={{
                endAdornment: getLocationState.loading ? <StyledCircularProgress /> : null,
              }}
            />
            {inputRef ? (
              <Popper open={isOpen} anchorEl={inputRef} placement='bottom-start'>
                <div {...(isOpen ? getMenuProps({}, { suppressRefError: true }) : {})}>
                  <StyledDropdown
                    square
                    style={{
                      width: inputRef.clientWidth,
                    }}
                  >
                    {getLocationState.value &&
                      getLocationState.value.map((suggestion, index) => (
                        <MenuItem
                          {...getItemProps({
                            item: suggestion,
                          })}
                          key={index}
                          selected={index === highlightedIndex}
                        >
                          {suggestion.display_name}
                        </MenuItem>
                      ))}
                  </StyledDropdown>
                </div>
              </Popper>
            ) : null}
          </div>
        )}
      </Downshift>

      <StyledItems>
        {getWeatherState.loading
          ? Array.from(Array(7).keys()).map((index) => <CardSkeleton key={index} />)
          : getWeatherState.value &&
            getWeatherState.value.map((item, index) => (
              <WeatherCard
                key={index}
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

export default Weather
