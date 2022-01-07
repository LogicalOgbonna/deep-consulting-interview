import PropTypes from 'prop-types';
import React from 'react';
import Favorite from './Favorite';
import './index.scss';

const Favorites = ({ data }) => {
    return (

        data.length > 0 ?
            <div className="favorites">
                {data.map((v, i) => <Favorite key={i} data={v} />)}
            </div> :
            <div className="empty">
                No favorite cities selected
            </div>
    );
};

Favorites.propTypes = {
    data: PropTypes.any
};

export default Favorites;
