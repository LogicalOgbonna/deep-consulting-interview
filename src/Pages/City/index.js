import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { backIcon, not_starIcon, starIcon } from '../../assets/icons';
import { MyWeatherInfo, WeatherInfo } from '../../components';
import { getCity } from '../../store/header/header.action';
import { addFavoriteAC, removeFavoriteAC } from '../../store/home/home.action';
import './index.scss';

const City = () => {
    const navigate = useNavigate();
    const { city } = useParams();
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();
    const { city: cityInfo, cityLoading } = useSelector(state => state.headerReducer);
    const { largeCities: favorites } = useSelector(state => state.homeReducer);
    useEffect(() => {
        dispatch(getCity(city));
        setIsFavorite(checkFavorite(favorites, city));
    }, [city]);

    useEffect(() => {
        setIsFavorite(checkFavorite(favorites, city));
    }, [favorites]);

    const checkFavorite = (array, value) => {
        const v = array.find(v => v.name === value);
        if (v) return true;
        return false;
    };

    const goBack = () => navigate('/');
    const addToFavorite = () => {
        dispatch(addFavoriteAC(cityInfo));
    };
    const removeFromFavorite = () => {
        dispatch(removeFavoriteAC(cityInfo.name));
    };
    return (
        <div className="city">
            <div className="navigation_like">
                <div className="navigation">
                    <img onClick={goBack} src={backIcon} />
                </div>
                <div className="like">
                    {isFavorite ? <img onClick={removeFromFavorite} src={starIcon} /> : <img onClick={addToFavorite} src={not_starIcon} />}
                </div>
            </div>
            <MyWeatherInfo data={cityInfo} loading={cityLoading} />
            <WeatherInfo data={cityInfo} />
        </div>
    );
};

export default City;
