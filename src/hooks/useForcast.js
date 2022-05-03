import { useState } from 'react';
import axios from 'axios';

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';

const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForcast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForcast] = useState(null);

    // call API weather -.-

    const getWoeid = async location => {
        const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location } });
        console.log({ data });

        if (!data || data.length === 0) {
            setError('There is no such location!');
            setLoading(false);
            return;
        }

        return data[0];
    };

    const getForcastData = async woeid => {
        const { data } = await axios(`${REQUEST_URL}/${woeid}`);
        console.log({ data });

        if (!data || data === 0) {
            setError('Something went wrong');
            setLoading(false);
            return;
        }

        return data;
    };

    const gatherForecastData = data => {
        const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title);
        const currentDayDetails = getCurrentDayDetailedForecast(data.consolidated_weather[0]);
        const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);

        setForcast({ currentDay, currentDayDetails, upcomingDays });
        setError(false);
    };

    const submitRequest = async location => {
        setLoading(true);
        setError(false);
        const response = await getWoeid(location);
        if (!response?.woeid) return;
        const data = await getForcastData(response.woeid);
        console.log({ data });
        if (!data) return;

        gatherForecastData(data);
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
    };
};

export default useForcast;
