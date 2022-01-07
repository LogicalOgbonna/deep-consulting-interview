import React from 'react';
import Skeleton from 'react-loading-skeleton';

import './Card.scss';
const LoadingCard = () => {
    return (
        <Skeleton className="loading_card" />
    );
};

export default LoadingCard;
