import { useEffect, useRef, useState } from 'react';
import './Future.css';
import evil from '../../accets/future/evilcloudy.png'
import nuetral from '../../accets/future/nutralcloudy.png'
import sunish from '../../accets/future/sun-cloudy.png'
import sunny from '../../accets/future/sunny.png'
import verysunnyish from '../../accets/future/verysuncloudy.png'
function Future() {
    const [dateDatas, setDateDatas] = useState([
        { title: 'Fri, Oct 13', icon: sunish, temperature: '23/14℃', explained: 'Light rain' },
        { title: 'Sat, Oct 14', icon: sunish, temperature: '22/10℃', explained: 'Light rain' },
        { title: 'Sun, Oct 15', icon: sunish, temperature: '13/6℃', explained: 'Light rain' },
        { title: 'Mon, Oct 16', icon: verysunnyish, temperature: '12/4℃', explained: 'Few Clouds' },
        { title: 'Tue, Oct 17', icon: evil, temperature: '12/4℃', explained: 'Overcast Clouds' },
        { title: 'Wed, Oct 18', icon: sunish, temperature: '13/4℃', explained: 'Clear sky' },
        { title: 'Thu, Oct 19', icon: evil, temperature: '12/5℃', explained: 'Overcast Clouds' },
        { title: 'Fri, Oct 20', icon: nuetral, temperature: '9/3℃', explained: 'Scattered Clouds' },
    ])
    return (
        <div className="future">
            <p className="future-day">8-day forcast</p>
            {dateDatas.map(function (e) {
                return (
                    <div className="future-perdiction">
                        <p className="future-perdiction-date">{e.title}</p>
                        <div className="future-container">
                            <img src={e.icon} alt="sun" className="future-perdiction-image" />
                            <p className="future-container-temperature">{e.temperature}</p>
                        </div>
                        <p className="future-perdiction-explained">{e.explained}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Future
