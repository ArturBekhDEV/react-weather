import React from 'react';

import styles from './UpcomingDaysForecastItem.module.css';
const imgUrlBase = 'https://www.metaweather.com/static/';

const UpcomingDaysForecastItem = ({ weekday, temperature, imgUrl }) => (
    <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}>
        <img className="mb-2" width="35" src={`${imgUrlBase}img/weather/${imgUrl}.svg`} alt="" />
        <span className="mb-2 font-weight-bold">{weekday}</span>
        <span className="font-weight-bold">{temperature}&deg;</span>
    </li>
);

export default UpcomingDaysForecastItem;
