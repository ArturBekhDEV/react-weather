import React from 'react';

import styles from './Form.module.css';
import { useState } from 'react';

import propTypes from 'prop-types';

const Form = ({ submitSearch }) => {
    const [location, setLocation] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        if (!location || location === '') return;
        submitSearch(location);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={event => setLocation(event.target.value)}
            />
            <button type="submit" className={styles.button} onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};

Form.propTypes = {
    submitSearch: propTypes.func.isRequired,
};
export default Form;
