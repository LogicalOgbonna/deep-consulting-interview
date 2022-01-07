/* eslint-disable no-undef */
import axios from 'axios';
import { errorHandler, successHandler } from '../utils/response';

export const getCityService = async (city) => {
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