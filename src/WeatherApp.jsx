import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pattoki",
        feelsLike: 12.39,
        temp: 13.19,
        tempMin: 13.19,
        tempMax: 13.19,
        humidity: 70,
        weather: "light rain",
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div className='text-center font-bold text-5xl'>
            <h2>Weather App by Sohail</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}

export default WeatherApp
