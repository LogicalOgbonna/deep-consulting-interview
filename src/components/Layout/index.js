import PropTypes from 'prop-types';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

import './index.scss';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="layout">
                {children}
                <div className="push"></div>
            </main>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
