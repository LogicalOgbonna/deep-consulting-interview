import { toast } from 'react-toastify';
export const errorHandler = (e) => {
    const data = e?.response?.data ? e?.response?.data.message : e.message;
    toast.error(data);
    return {
        data,
        success: false,
    };
};

export const successHandler = (data) => ({
    data,
    success: true,
});
