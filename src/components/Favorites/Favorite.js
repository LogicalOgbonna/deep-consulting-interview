import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { iconMapper, starIcon } from '../../assets/icons';
import { removeFavoriteAC } from '../../store/home/home.action';
import './Favorite.scss';

const Favorite = ({ data }) => {
    const dispatch = useDispatch();
    const removeFromFavorite = () => {
        dispatch(removeFavoriteAC(data.name));
    };
    return (
        <div className="favorite_card">
            <div className="content">
                <div className="city_weather">
                    <p className="city">{data.name}</p>
                    <p className="weather">{data?.weather_descriptions}</p>
                </div>
                <div className="temperature_image">
                    <p className="temperature">{data.temperature}&#176;</p>
                    <img className="img" height="20" src={iconMapper(data?.weather_descriptions?.[0])} />
                </div>
            </div>
            <div className="star">
                <img onClick={removeFromFavorite} height="20" src={starIcon} />
            </div>
        </div>
    );
};

Favorite.propTypes = {
    data: PropTypes.any
};

export default Favorite;
