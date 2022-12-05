import React from 'react'
import "./current.css"


const Current = ({data}) => {
  return (
    <div className='weather'>
        <div className="top">
            <div>
                <p className='city'> {data.city} </p>
                <p className='weather-desc'> {data.weather[0].description} </p>
            </div>
            <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className='weather-icon'/>
        </div>

        <div className="bottom">
            <p className="temperature"> {Math.round(data.main.temp)}°C </p>
            <div className="details">
                <div className="parameter-row">
                    <span className="parameter-label top"> Details </span>
                </div>

                <div className="parameter-row">
                    <span className="parameter-label"> Feels like </span>
                    <span className="parameter-value"> {Math.round(data.main.feels_like)}°C </span>
                </div>

                <div className="parameter-row">
                    <span className="parameter-label"> Wind </span>
                    <span className="parameter-value"> {Math.round(data.wind.speed)} m/s </span>
                </div>

                <div className="parameter-row">
                    <span className="parameter-label"> Humidity </span>
                    <span className="parameter-value"> {data.main.humidity}% </span>
                </div>

                <div className="parameter-row">
                    <span className="parameter-label"> Pressure </span>
                    <span className="parameter-value"> {data.main.pressure} hPa </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Current