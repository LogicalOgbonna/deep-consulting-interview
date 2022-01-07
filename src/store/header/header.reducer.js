import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cityLoading: false,
    city: {},
    searchedCities: []
};

const headerSlice = createSlice({
    name: 'headerSlice',
    initialState,
    reducers: {
        headerSetter: (state, action) => ({
            ...state,
            [action.payload.type]: action.payload.data,
        }),
    },
});

export const { headerSetter } = headerSlice.actions;
export default headerSlice.reducer;
