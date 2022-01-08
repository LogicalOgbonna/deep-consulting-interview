/* eslint-disable no-undef */
import axios from 'axios';
import weatherStack from '../../api';
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
        const { data } = await weatherStack.get(`/current?access_key=${process.env.REACT_APP_WEATHERSTACK_ACCESS_KEY}&query=${rest?.data?.address?.city || rest?.data?.address?.state}`);
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
            'order': 'dsc',
        });
        if (data.error) return errorHandler({
            message: 'Error occurred'
        });
        // The concatenation of city and county was done because of cases like Aba in Nigeria and in Russia.
        return successHandler(data.data.map(v => `${v.city}, ${v.country}`).sort());
    } catch (error) {
        return errorHandler(error);
    }
};

export const getWeatherInfoOfCityService = async (city) => {
    try {
        const { data } = await weatherStack.get(`/current?access_key=${process.env.REACT_APP_WEATHERSTACK_ACCESS_KEY}&query=${city}`);
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