/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Favorites, MyWeatherInfo, WeatherCards } from '../../components';
import { getLargestCitiesAC, getMyWeatherWithMyLocationAC } from '../../store/home/home.action';
import { getCurrentLocation } from '../../utils/geolocation';
import './home.scss';
const HomePage = () => {
    const dispatch = useDispatch();
    const [position, setPosition] = useState({
        long: null,
        lat: null,
        permitted: false
    });

    const { myWeatherInfo, myWeatherInfoLoading, favorites, largeCities, largeCitiesLoading } = useSelector(state => state.homeReducer);
    useEffect(() => {
        const onGetUserLongLat = ({ permitted, long, lat }) => {
            if (permitted) {
                dispatch(getMyWeatherWithMyLocationAC({
                    long,
                    lat,
                }));
            }
            setPosition({ permitted, long, lat });
        };
        getCurrentLocation({ cb: onGetUserLongLat });
        dispatch(getLargestCitiesAC());
    }, []);
    return (
        <div className="home">
            {position.permitted &&
                <MyWeatherInfo data={myWeatherInfo} loading={myWeatherInfoLoading} />
            }
            <Favorites data={favorites} />
            <WeatherCards data={largeCities} loading={largeCitiesLoading} />
        </div>
    );
};

export default HomePage;