import { useState } from 'react'


import axios from 'axios'

export default function CurrentCity(props) {
    let [temp, setTemp] = useState(null);
    let [description, setDescription] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [wind, setWind] = useState(null);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=600157a0514e78d72315f525be6579c1&lang=en&units=metric`;

    axios.get(url).then(setData)

    function setData(response) {
        console.log(url)
        setTemp(Math.round(response.data.main.temp))
        setDescription(response.data.weather[0].description)
        setHumidity(response.data.main.humidity)
        setWind(response.data.wind.speed)

        let iconElement = document.querySelector("#icon");
        iconElement.setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        );

        iconElement.setAttribute("alt", description);
    }

    return (
        <div className="weather">
            <h1>{props.city}</h1>
            <p>Description: {description}</p>
            <p>Humidity: {humidity}%</p>
            <p>Temperature: {temp}°C</p>
            <p>Wind: {wind}km/h</p>
            <img id="icon" src="" alt="" />
        </div>
    )
}