/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { getLargestCitiesService, getMyCurrentCityService, getMyCurrentWeatherInformationService, getWeatherInfoOfCityService } from './home.service';
import { homeSetter } from './home.reducer';

const getMyWeatherWithMyLocationMW = store => next => async action => {
    if (action.type !== 'user/get-weather-details') return next(action);
    store.dispatch(homeSetter({ type: 'myWeatherInfoLoading', data: true }));
    const { success, data } = await getMyCurrentWeatherInformationService(await getMyCurrentCityService(action.payload));
    store.dispatch(homeSetter({ type: 'myWeatherInfoLoading', data: false }));
    if (!success) return null;
    store.dispatch(homeSetter({ type: 'myWeatherInfo', data }));
};

const getLargestCitiesMW = store => next => async action => {
    const { homeReducer: { largeCities } } = store.getState();
    if (action.type !== 'user/get-largest-cities') return next(action);
    const weatherInfo = [];
    if (largeCities.length) {
        return store.dispatch(homeSetter({
            type: 'largeCities',
            data: largeCities
        }));
    }
    store.dispatch(homeSetter({
        type: 'largeCitiesLoading', data: true
    }));
    const { success, data: cities } = await getLargestCitiesService();
    if (!success) {
        store.dispatch(homeSetter({
            type: 'largeCitiesLoading', data: false
        }));
        return;
    }

    for (let i = 0; i < cities.length; i++) {
        const { success, data } = await getWeatherInfoOfCityService(cities[i]);
        if (success) {
            weatherInfo.push(data);
        }

        if (cities.length - 1 === i) {
            store.dispatch(homeSetter({
                type: 'largeCitiesLoading', data: false
            }));
            if (weatherInfo.length > 0) {
                store.dispatch(homeSetter({
                    type: 'largeCities',
                    data: weatherInfo
                }));
            }
        }
    }
};

const addFavoriteMW = store => next => action => {
    if (action.type !== 'user/add-favorite') return next(action);
    const { homeReducer: { largeCities: favorites } } = store.getState();
    store.dispatch(homeSetter({ type: 'largeCities', data: [...favorites, action.payload] }));
};

const removeFromFavoriteMW = store => next => action => {
    if (action.type !== 'user/remove-favorite') return next(action);
    const { homeReducer: { largeCities: favorites } } = store.getState();
    const newFavorites = favorites.filter(f => f.name !== action.payload);
    store.dispatch(homeSetter({ type: 'largeCities', data: newFavorites }));
};

export default [getMyWeatherWithMyLocationMW, getLargestCitiesMW, addFavoriteMW, removeFromFavoriteMW];