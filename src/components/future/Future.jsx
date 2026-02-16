import { useEffect, useRef, useState } from 'react';
import './Future.css';
import evil from '../../accets/future/evilcloudy.png'
import nuetral from '../../accets/future/nutralcloudy.png'
import sunish from '../../accets/future/sun-cloudy.png'
import sunny from '../../accets/future/sunny.png'
import verysunnyish from '../../accets/future/verysuncloudy.png'
function Future() {
    return(
        <div className="future">
            <p className="future-day">8-day forcast </p>
            <div className="future-perdiction">
                <p className="future-perdiction-date">Fri, Oct 13</p>
                <img src={sunish} alt="sun" className="future-perdiction-image" />
                <p className="future-perdiction-explained">Light rain</p>
            </div>
            <div className="future-perdiction">
                <p className="future-perdiction-date">Sat, Oct 14</p>
                <img src={sunish} alt="sun" className="future-perdiction-image" />
                <p className="future-perdiction-explained">Light rain</p>
            </div>
            <div className="future-perdiction">
                <p className="future-perdiction-date">Sun, Oct 15</p>
                <img src={sunish} alt="sun" className="future-perdiction-image" />
                <p className="future-perdiction-explained">Light rain</p>
            </div>
            <div className="future-perdiction">
                <p className="future-perdiction-date">Mon, Oct 16</p>
                <img src={verysunnyish} alt="sun" className="future-perdiction-image" />
                <p className="future-perdiction-explained">Few Clouds</p>
            </div>
            <div className="future-perdiction">
                <p className="future-perdiction-date">Tue, Oct 17</p>
                <img src={evil} alt="sun" className="future-perdiction-image" />
                <p className="future-perdiction-explained">Overcast Clouds</p>
            </div>
            <div className="future-perdiction">
                <p className="future-perdiction-date">Wed, Oct 18</p>
                <img src={sunny} alt="sun" className="future-perdiction-image" />
                <p className="future-perdiction-explained">Clear sky</p>
            </div>
            <div className="future-perdiction">
                <p className="future-perdiction-date">Thu, Oct 19</p>
                <img src={evil} alt="sun" className="future-perdiction-image" />
                <p className="future-perdiction-explained">Overcast Clouds</p>
            </div>
            <div className="future-perdiction">
                <p className="future-perdiction-date">Fri, Oct 20</p>
                <img src={nuetral} alt="sun" className="future-perdiction-image" />
                <p className="future-perdiction-explained">Scattered Clouds</p>
            </div>
        </div>
    )
}
export default Future