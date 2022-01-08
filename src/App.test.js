/* eslint-disable no-undef */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { findByTestAttr } from './utils/test';

// test('renders learn react link', () => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('With React Testing Library', () => {
  it('App Component Does Not Break!"', () => {
    const AppComponent = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const listItem = findByTestAttr(AppComponent, 'AppComponent');
    expect(listItem.length).toBe(1);

    // expect(getByText('Hello World!')).not.toBeNull();
  });
});
