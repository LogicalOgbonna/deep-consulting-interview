import PropTypes from 'prop-types';
import moment from 'moment';
import React from 'react';
import { deleteIcon, iconMapper, locationIcon } from '../../assets/icons';
import './Card.scss';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { removeFavoriteAC } from '../../store/home/home.action';

const Card = ({ data }) => {
    const navigate = useNavigate();
    const onClick = () => navigate(`/${data.name}`);
    const dispatch = useDispatch();
    const removeFromFavorite = () => {
        dispatch(removeFavoriteAC(data.name));
    };
    return (
        <div className={`weather_card ${data.is_day}`}>
            <div onClick={() => onClick()} className="info">
                <div className="temperature">
                    {data.temperature}&#176;
                </div>
                <div className="time">
                    <p>{moment(data.localtime).format('LLL')} </p>
                    <div style={{ display: 'flex', alignItems: 'center', padding: '5px 0' }}>
                        <img height="15" src={locationIcon} /> <span>{data.name}, {data.country}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img height="15" src={iconMapper(data?.weather_descriptions?.[0])} /> <span>{data.weather_descriptions}</span>
                    </div>
                </div>
            </div>
            <div onClick={removeFromFavorite} className="action">
                <img height="20" src={deleteIcon} />
            </div>
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.any
};

export default Card;
