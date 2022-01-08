import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyWeatherInfo, WeatherCards } from '../../components';
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

    const { myWeatherInfo, myWeatherInfoLoading, largeCities, largeCitiesLoading } = useSelector(state => state.homeReducer);
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
        <div data-testid="home-page" className="home">
            {position.permitted &&
                <MyWeatherInfo data={myWeatherInfo} loading={myWeatherInfoLoading} />
            }
            <WeatherCards data={largeCities} loading={largeCitiesLoading} />
        </div>
    );
};

export default HomePage;