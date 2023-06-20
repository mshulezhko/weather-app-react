import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ForecastData(props) {
  const [mounted, setMounted] = useState(false)
  let apiKey = 'b95f179627c8dd37f41e1be6e3250e19'
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKey}`

  function Forecast(response) {
    console.log(response.data)
    let forecast = response.data.daily
    let forecastElement = document.querySelector('#forecast')
    let forecastHtml = ''
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    forecast.forEach(function (day, index) {
      if (index < 6) {
        let date = new Date(day.dt * 1000)
        let newDay = date.getDay()

        forecastHtml = forecastHtml + `<div class="col">
              <div class="weather-forecast-date">${days[newDay]}</div>
              <div class="weather-forecast-img">
                <img
                  src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
                  alt="${day.weather[0].description}"
                />
              </div>
              <div class="weather-forecast-temp">
                <span class="weather-forecast-temp-max">${Math.round(day.temp.max)}°-</span>
                <span class="weather-forecast-temp-min">${Math.round(day.temp.min)}°</span>
              </div>
            </div>`
      }
    })

    forecastElement.innerHTML = forecastHtml
    return forecastElement
  }



  if (!mounted) {
    try { axios.get(apiUrl).then(Forecast) } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])



  return (
    <div class="row" id='forecast' >
    </div>
  )

}