/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import React from 'react';
import Layout from './index';

import { BrowserRouter as Router } from 'react-router-dom';

describe('Layout Component', () => {
    it('renders without breaking', () => {
        const { getByTestId } = render(<Router>
            <Layout />
        </Router>);
        expect(getByTestId('layout').childElementCount).toBe(3);
    });
});
