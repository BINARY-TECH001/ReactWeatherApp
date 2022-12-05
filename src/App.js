
import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import './App.css';
import Current from './components/current-weather/Current';
import Footer from './components/footer/Footer';
import Forecast from './components/forecast/Forecast';
import Search from './components/search/Search';

function App() {
  const [ currentWeather, setCurrentWeather ] = useState(null)
  const [ forecast, setForecast ] = useState(null)

  const handleOnSearchChange = (searchData)=>{
    const [ lat, lon ] = searchData.value.split(" ")

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
    .then(async (response)=>{
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse})
      setForecast({city: searchData.label, ...forecastResponse})
    })
    .catch((err)=> console.log(err))
  }

  console.log(currentWeather);
  console.log(forecast);
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      { currentWeather && <Current data={currentWeather}/>}
      {forecast && <Forecast data={forecast}/>}
      <Footer />
    </div>
  );
}

export default App;
