import { createAction } from '@reduxjs/toolkit';

// Get user weather details using users long and lat action creator
export const getMyWeatherWithMyLocationAC = createAction('user/get-weather-details');
export const getLargestCitiesAC = createAction('user/get-largest-cities');
export const addFavoriteAC = createAction('user/add-favorite');
export const removeFavoriteAC = createAction('user/remove-favorite');
