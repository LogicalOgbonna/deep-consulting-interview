import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';
import './index.scss';
import LoadingCard from './LoadingCard';
const WeatherCards = ({ data, loading }) => {
    return (
        <div className="cards_wrapper">
            {loading ? [1, 2, 3, 4, 5, 6].map((v, i) => <LoadingCard key={i} />)
                : data.length ? data.map((card, i) => <Card key={i} data={card} />) : 'No data to display'
            }

        </div>
    );
};

WeatherCards.propTypes = {
    data: PropTypes.any,
    loading: PropTypes.bool
};

export default WeatherCards;
