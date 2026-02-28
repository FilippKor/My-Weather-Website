import { useEffect, useRef, useState } from "react";
import "./WeatherDetails.css";
import { IoIosSearch } from "react-icons/io";
import temp from "../../accets/details/temp.png";
import pressure from "../../accets/details/pressure.png";
import wind from "../../accets/details/wind.png";
import eye from "../../accets/details/eye.png";
import percipitation from "../../accets/details/percipitation.png";

function WeatherDetails() {
  const [weatherData, setWeatherData] = useState([
    { top: "Feels like", mid: "29.2*C", icon: temp },
    { top: "Humidity", mid: "59%", icon: percipitation },
    { top: "Pressure", mid: "1007 Pa", icon: pressure },
    { top: "Wind speed", mid: "3.17 m/s", icon: wind },
  ]);
  return (
    <div className="WeatherDetails">
      {weatherData.map(function (e) {
        return (
          <div className="WeatherDetails-temp weather-container">
            <p className="WeatherDetails-top">{e.top}</p>
            <p className="WeatherDetails-mid">{e.mid}</p>
            <img src={e.icon} alt="thermometer" className="WeatherDetails-image"/>
          </div>
        );
      })}
      <div className="WeatherDetails-minmax weather-container">
        <p className="WeatherDetails-minmax-top">Min *C</p>
        <p className="WeatherDetails-minmax-mid second WeatherDetails-mid">
          29.2*C
        </p>
        <p className="WeatherDetails-minmax-lowmid">Max *C</p>
        <p className="WeatherDetails-minmax-low WeatherDetails-mid">29.2*C</p>
      </div>
      <div className="WeatherDetails-visibility weather-container">
        <p className="WeatherDetails-top">Visibility</p>
        <p className="WeatherDetails-mid">Unlimited</p>
        <img src={eye} alt="eye" className="WeatherDetails-image" />
      </div>
    </div>
  );
}
export default WeatherDetails;
