import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    myWeatherInfo: {},
    myWeatherInfoLoading: false,
    largeCities: [],
    largeCitiesLoading: false,
    favorites: [],
};

const homeSlice = createSlice({
    name: 'homeSlice',
    initialState,
    reducers: {
        homeSetter: (state, action) => ({
            ...state,
            [action.payload.type]: action.payload.data,
        }),
    },
});

export const { homeSetter } = homeSlice.actions;
export default homeSlice.reducer;
