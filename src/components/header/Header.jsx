import { useEffect, useRef, useState } from 'react';
import './Header.css';
import { IoIosSearch } from "react-icons/io";


function Header() {
     const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    function handleSearch(event){
        event.preventDefault()
    }
    return (
        <header className='header'>
            <h1 className="header-title">Weather dashboard</h1>
            <div className="header-desc">
                <p className="header-desc-title">Create your personal list of favorite cities and always be aware of the weather.</p>
                <span className="header-desc-vertical-line"></span>
                <p ref={date} className="header-desc-date"></p>
                 {date.toLocaleString()}
            </div>
            <form className="header-search" onSubmit={handleSearch}>
                <input type="text" placeholder='Search location...' className='header-search-weather'/>
                <button onClick={() => onSendObject(weatherData)} className="header-search-find">
                    <IoIosSearch className='header-search-find-icon'/>
                </button>
            </form>
        </header>
    )
}
export default Header