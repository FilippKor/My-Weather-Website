import { useEffect, useRef, useState } from 'react';
import './WeatherDetails.css';
import { IoIosSearch } from "react-icons/io";
import temp from '../../accets/details/temp.png'
import pressure from '../../accets/details/pressure.png'
import wind from '../../accets/details/wind.png'
import eye from '../../accets/details/eye.png'
import percipitation from '../../accets/details/percipitation.png'

function WeatherDetails() {
    return (
        <div className='WeatherDetails'>
            <div className="WeatherDetails-temp weather-container">
                <p className="WeatherDetails-top">Feels like</p>
                <p className="WeatherDetails-mid">29.2*C</p>
                <img src={temp} alt="thermometer" className="WeatherDetails-image" />
            </div>
            <div className="WeatherDetails-minmax weather-container">
                <p className="WeatherDetails-minmax-top">Min *C</p>
                <p className="WeatherDetails-minmax-mid second WeatherDetails-mid">29.2*C</p>
                <p className="WeatherDetails-minmax-lowmid">Max *C</p>
                <p className="WeatherDetails-minmax-low WeatherDetails-mid">29.2*C</p>
            </div>
            <div className="WeatherDetails-humidity weather-container">
                <p className="WeatherDetails-top">Humidity</p>
                <p className="WeatherDetails-mid">59%</p>
                <img src={percipitation} alt="rain cloud with rain" className="WeatherDetails-image" />  
            </div>
            <div className="WeatherDetails-pressure weather-container">
                <p className="WeatherDetails-top">Pressure</p>
                <p className="WeatherDetails-mid">1007 Pa</p>
                <img src={pressure} alt="pressureomiter" className="WeatherDetails-image" />
            </div>
            <div className="WeatherDetails-windspeed weather-container">
                <p className="WeatherDetails-top">Winds speed</p>
                <p className="WeatherDetails-mid">3.17 m/s</p>
                <img src={wind} alt="wind" className="WeatherDetails-image" />
            </div>
            <div className="WeatherDetails-visibility weather-container">
                <p className="WeatherDetails-top">Visibility</p>
                <p className="WeatherDetails-mid">Unlimited</p>
                <img src={eye} alt="eye" className="WeatherDetails-image" />
            </div>
        </div>
    )
}
export default WeatherDetails
