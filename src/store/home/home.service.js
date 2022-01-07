/* eslint-disable no-undef */
import axios from 'axios';
import { errorHandler, successHandler } from '../utils/response';

export const getMyCurrentCityService = async position => {
    try {
        const { data } = await axios.get(`https://us1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&lat=${position.lat}&lon=${position.long}&format=json`);
        return successHandler(data);
    } catch (error) {
        return errorHandler(error);
    }
};

export const getMyCurrentWeatherInformationService = async ({ success, ...rest }) => {
    if (!success) return errorHandler({ message: 'Could not retrieve City information' });
    try {
        const { data } = await axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_ACCESS_KEY}&query=${rest?.data?.address?.city || rest?.data?.address?.state}`);
        if (Object.keys(data).includes('success')) {
            if (!data.success) return errorHandler({ message: data.error.info });
        }
        return successHandler({
            ...data.current,
            ...data.request,
            ...data.location
        });
    } catch (error) {
        return errorHandler(error);
    }
};

export const getLargestCitiesService = async () => {
    try {
        const { data } = await axios.post('https://countriesnow.space/api/v0.1/countries/population/cities/filter', {
            'limit': 15,
            'order': 'asc',
            'orderBy': 'name'
        });
        if (data.error) return errorHandler({
            message: 'Error occurred'
        });
        // The concatenation of city and county was done because of cases like Aba in Nigeria and in Russia.
        return successHandler(data.data.map(v => `${v.city}, ${v.country}`));
    } catch (error) {
        return errorHandler(error);
    }
};

export const getWeatherInfoOfCityService = async (city) => {
    try {
        const { data } = await axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_ACCESS_KEY}&query=${city}`);
        if (Object.keys(data).includes('success')) {
            if (!data.success) return errorHandler({ message: data.error.info });
        }
        return successHandler({
            ...data.current,
            ...data.request,
            ...data.location
        });
    } catch (error) {
        return errorHandler(error);
    }
};

// {
//     "request": {
//         "type": "City",
//         "query": "Ikom, Nigeria",
//         "language": "en",
//         "unit": "m"
//     },
//     "location": {
//         "name": "Ikom",
//         "country": "Nigeria",
//         "region": "Ebonyi",
//         "lat": "5.967",
//         "lon": "8.700",
//         "timezone_id": "Africa/Lagos",
//         "localtime": "2022-01-06 14:27",
//         "localtime_epoch": 1641479220,
//         "utc_offset": "1.0"
//     },
//     "current": {
//         "observation_time": "01:27 PM",
//         "temperature": 42,
//         "weather_code": 113,
//         "weather_icons": [
//             "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
//         ],
//         "weather_descriptions": [
//             "Sunny"
//         ],
//         "wind_speed": 1,
//         "wind_degree": 276,
//         "wind_dir": "W",
//         "pressure": 1008,
//         "precip": 0,
//         "humidity": 20,
//         "cloudcover": 4,
//         "feelslike": 43,
//         "uv_index": 10,
//         "visibility": 10,
//         "is_day": "yes"
//     }
// }