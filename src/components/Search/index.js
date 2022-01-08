import PropTypes from 'prop-types';
import React, { useState } from 'react';

import './index.scss';

const Search = ({ placeholder, navigate }) => {
    const [searchInput, setSearchInput] = useState('');


    const onSearchInputChange = ({ target: { value } }) => {
        setSearchInput(value);
    };

    const onSubmit = (e) => {
        if (e.key === 'Enter') {
            navigate(`/${searchInput}`);
            setSearchInput('');
        }
    };

    return (
        <input
            value={searchInput}
            onChange={onSearchInputChange}
            className="autocomplete-input"
            placeholder={placeholder}
            onKeyPress={onSubmit}
        />
    );
};

Search.propTypes = {
    loading: PropTypes.bool,
    cities: PropTypes.arrayOf(
        PropTypes.string,
    ),
    placeholder: PropTypes.string,
    navigate: PropTypes.func,
};
Search.defaultProps = {
    placeholder: 'Search city',
};

export default Search;
