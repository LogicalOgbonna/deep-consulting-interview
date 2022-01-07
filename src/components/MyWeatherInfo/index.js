import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { iconMapper, locationIcon } from '../../assets/icons';
import './index.scss';
import LoadingWeather from './LoadingWeather';


const MyWeatherInfo = ({ data, loading }) => {
    return (
        <div className="my-current-weather">
            {loading ?
                <LoadingWeather />
                :
                <div className={`content  ${data?.is_day}`}>
                    <div className="location">
                        <img height="20" src={locationIcon} /> {data.name}, {data.country}
                        <div>
                            <img src={iconMapper(data?.weather_descriptions?.[0])} />
                        </div>
                    </div>
                    <div className="temperature_time">
                        <span className="temperature">
                            {data.temperature}&#176;
                        </span>
                        <span className="time">
                            {moment(data.localtime).format('LLL')}
                        </span>
                    </div>
                </div>
            }
        </div>
    );
};

MyWeatherInfo.propTypes = {
    data: PropTypes.any,
    loading: PropTypes.bool
};

export default MyWeatherInfo;
