import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const Search = ({ placeholder }) => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const onSearchInputChange = ({ target: { value } }) => {
        setSearchInput(value);
    };

    const onSubmit = (e) => {
        if (e.key === 'Enter') {
            navigate(`/${searchInput}`);
        }
    };

    return (
        <React.Fragment>
            <input
                value={searchInput}
                onChange={onSearchInputChange}
                className="autocomplete-input"
                placeholder={placeholder}
                onKeyPress={onSubmit}
            />
        </React.Fragment>
    );
};

Search.propTypes = {
    loading: PropTypes.bool,
    cities: PropTypes.arrayOf(
        PropTypes.string,
    ),
    placeholder: PropTypes.string,
};
Search.defaultProps = {
    placeholder: 'Search city',
};

export default Search;
