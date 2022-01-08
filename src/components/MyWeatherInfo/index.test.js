/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import MyWeatherInfo from '.';

describe('MyWeatherInfo Component', () => {
    const propTypes = {
        loading: false,
        data: {
            is_day: 'yes',
            name: 'Lagos',
            country: 'Nigeria',
            weather_descriptions: ['windy'],
            localtime: '2022-01-09 01:58',
            temperature: 10
        }
    };
    it('renders without breaking', () => {
        const { getByTestId } = render(<MyWeatherInfo {...propTypes} />);
        expect(getByTestId('my-weather-info')).toHaveClass('my-current-weather');
    });

    it('display info while loading is false', () => {
        propTypes.loading = false;
        const { getByTestId } = render(<MyWeatherInfo {...propTypes} />);
        expect(getByTestId('my-weather-info').childElementCount).toBe(1);
    });
    it('displays loading while loading is true', () => {
        const { getByTestId } = render(<MyWeatherInfo loading={true} data={propTypes.data} />);
        expect(getByTestId('my-weather-info').childElementCount).toBe(1);
    });
});
