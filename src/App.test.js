/* eslint-disable no-undef */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { render } from './utils/test-utils';
import App from './App';

describe('App Component', () => {
  it('renders without breaking"', () => {
    const { getByTestId } = render(
      <App />
    );
    expect(getByTestId('AppComponent')).toHaveClass('App');
    expect(getByTestId('AppComponent').childElementCount).toBe(1);
  });
});
