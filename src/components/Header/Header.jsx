import React from 'react';

import styles from './Header.module.css';

const Header = () => (
    <h1 className={styles.heading}>
        <span className={styles.light}>Weather App.</span> | REACT
    </h1>
);

export default Header;
