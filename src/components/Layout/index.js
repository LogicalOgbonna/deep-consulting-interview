import PropTypes from 'prop-types';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const Layout = ({ children }) => {
    const navigate = useNavigate();
    return (
        <div data-testid="layout">
            <Header navigate={navigate} />
            <main className="layout">
                {children}
                <div className="push"></div>
            </main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
