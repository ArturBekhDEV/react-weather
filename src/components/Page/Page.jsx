import React, { Fragment } from 'react';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';
import useForcast from '../../hooks/useForcast';

import Header from '../Header';
import styles from './Page.module.css';

const Page = () => {
    const { isError, isLoading, forecast, submitRequest } = useForcast();

    const onSubmit = value => {
        submitRequest(value);
    };

    return (
        <Fragment>
            <Header />
            {!forecast && (
                <div className={`${styles.box} position-relative`}>
                    {/* <Form /> */}
                    {!isLoading && <Form submitSearch={onSubmit} />}
                    {/* <Error /> */}
                    {isError && <Error message={isError} />}
                    {/* <Loader /> */}
                    {isLoading && <Loader />}
                </div>
            )}
            {/* <Forecast /> */}
            {forecast && <Forecast forecast={forecast} />}
        </Fragment>
    );
};

export default Page;
