/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
    it('Renders Footer component without breaking"', () => {
        const { getByTestId } = render(
            <Footer />
        );
        expect(getByTestId('footer')).toHaveTextContent('Designed with ♥ by Arinze Ogbonna');
    });
});