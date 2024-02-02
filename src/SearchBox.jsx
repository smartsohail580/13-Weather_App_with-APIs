import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false); // Change "false" to false

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "a981b3d940ee32897d743cb606b592ba";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false); // Reset error to false on successful fetch
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className='mt-6'>
            <form action="" onSubmit={handleSubmit} className='mt-2'>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                    Search
                </Button>
                {error && <p className='text-red-500'>No Such Place Exists!</p>}
            </form>
        </div>
    );
}

export default SearchBox;
