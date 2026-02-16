import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Cards from './components/cards/Cards';
import WeatherDetails from './components/details/WeatherDetails';
import Future from './components/future/Future';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Header/>
    <Cards/>
    <WeatherDetails/>
    <Future/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
