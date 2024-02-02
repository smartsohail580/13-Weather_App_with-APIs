import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

function InfoBox({ info }) {


    const RAIN_URL = "https://images.unsplash.com/photo-1503429134808-fdf0cd4e1bfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpZ2h0JTIwcmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    const COLD_URL = "https://images.unsplash.com/photo-1579847641267-5445b760b991?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbGR8ZW58MHx8MHx8fDA%3D"

    const HOT_URL = "https://images.unsplash.com/photo-1682687220795-796d3f6f7000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8c3VufGVufDB8fDB8fHww"



    return (
        <>
        <div className='font-semibold text-2xl flex items-center justify-center mt-6'>
          <div className='InfoBox space-y-9'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={
                  info.humidity > 80
                    ? RAIN_URL : info.temp > 15
                    ? HOT_URL
                    : COLD_URL
                }
                title="green iguana"
              />
              <CardContent>
                <Typography style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }} gutterBottom variant="h5" component="div">
                  {info.city} {
                    info.humidity > 80
                      ? <ThunderstormIcon />
                      : info.temp > 15
                      ? <WbSunnyIcon />
                      : <AcUnitIcon />
                  }
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                  <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Temperature = {info.temp}&deg;C</p>
                  <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Humidity = {info.humidity}</p>
                  <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Min Temp = {info.tempMin}&deg;C</p>
                  <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Max Temp = {info.tempMax}&deg;C</p>
                  <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
      
    )
}

export default InfoBox;
