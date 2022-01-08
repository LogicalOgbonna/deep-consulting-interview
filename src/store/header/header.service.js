/* eslint-disable no-undef */
import weatherStack from '../../api';
import { errorHandler, successHandler } from '../utils/response';

export const getCityService = async (city) => {
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