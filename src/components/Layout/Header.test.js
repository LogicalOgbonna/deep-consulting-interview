/* eslint-disable no-undef */
import React from 'react';
import { render, } from '@testing-library/react';
import Header from './Header';
describe('Header Component', () => {
    it('Renders Header component without breaking"', () => {
        const navigate = () => { };
        const { getByTestId } = render(
            <Header navigate={navigate} />
        );
        const wrapper = getByTestId('header');
        expect(wrapper).toHaveTextContent('Weather Hub');
        expect(wrapper.childElementCount).toBe(2);
    });
});