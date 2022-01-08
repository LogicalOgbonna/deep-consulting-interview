/* eslint-disable no-undef */
import React, { useState } from 'react';
import HomePage from '.';
import { render } from '../../utils/test-utils';
import { renderHook, } from '@testing-library/react-hooks';

describe('Home Page component', () => {
    it('renders homepage without breaking', () => {
        const { getByTestId } = render(<HomePage />);
        const wrapper = getByTestId('home-page');
        expect(wrapper).toHaveClass('home');
    });
    it('should not render weather info is user does not allow location', () => {
        renderHook(() => useState({
            long: null,
            lat: null,
            permitted: false
        }));
        const { getByTestId } = render(<HomePage />);
        const wrapper = getByTestId('home-page');
        expect(wrapper.childElementCount).toBe(1);
    });
});
