import React from 'react';
import { clearIcon } from '../../assets/icons';
import Search from '../Search';

import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img height="50" src={clearIcon} /> Weather Hub
            </div>
            <div className="search">
                <Search
                    placeholder="Search cities"
                />
            </div>
        </div>
    );
};

export default Header;
