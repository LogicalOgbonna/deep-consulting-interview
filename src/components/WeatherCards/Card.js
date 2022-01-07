import PropTypes from 'prop-types';
import moment from 'moment';
import React from 'react';
import { iconMapper, locationIcon } from '../../assets/icons';
import './Card.scss';
import { useNavigate } from 'react-router';

const Card = ({ data }) => {
    const navigate = useNavigate();
    const onClick = () => navigate(`/${data.name}`);
    return (
        <div onClick={() => onClick()} className={`weather_card ${data.is_day}`}>
            <div className="info">
                <div className="temperature">
                    {data.temperature}&#176;
                </div>
                <div className="time">
                    <p style={{ paddingBottom: 3 }}>{moment(data.localtime).format('LLL')} </p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img height="15" src={locationIcon} /> <span>{data.name}, {data.country}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', paddingTop: 3 }}>
                        <img height="15" src={iconMapper(data?.weather_descriptions?.[0])} /> <span>{data.weather_descriptions}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.any
};

export default Card;
