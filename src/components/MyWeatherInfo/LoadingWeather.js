import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './index.scss';

const LoadingWeather = () => {
    return (
        <Skeleton className="loading_weather"/>
    );
};

export default LoadingWeather;
