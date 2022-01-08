/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
import { clearIcon } from '../../assets/icons';
import Search from '../Search';

import './Header.scss';

const Header = ({ navigate }) => {
    return (
        <div data-testid="header" className="header">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img height="50" src={clearIcon} /> Weather Hub
            </div>
            <div className="search">
                <Search
                    navigate={navigate}
                    placeholder="Search cities"
                />
            </div>
        </div>
    );
};

Header.propTypes = {
    navigate: PropTypes.func
};

export default Header;
