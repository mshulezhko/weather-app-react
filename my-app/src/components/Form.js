import React, { useState } from 'react'
import CurrentCity from './CurrentCity'
import Footer from './Footer'

export default function Form(props) {
    let [weather, setWeather] = useState(null)

    function setCityName(event) {
        event.preventDefault()
        let cityName = document.getElementById("city").value
        return setWeather(<CurrentCity city={cityName} />)
    }

    return (
        <>
            <div class='weather-container'>
                <form>
                    <input id='city' type="text" placeholder="City name" />
                    <button onClick={setCityName}>Search</button>
                </form>
                {weather}
            </div>
            <Footer />
        </>
    )
}