/* eslint-disable no-debugger */
import { homeSetter } from '../home/home.reducer';
import { headerSetter } from './header.reducer';
import { getCityService } from './header.service';

const getCityMW = (store) => next => async action => {
    const { headerReducer: { searchedCities }, homeReducer: { largeCities } } = store.getState();
    if (action.type !== 'user/get-city') return next(action);
    store.dispatch(headerSetter({ type: 'cityLoading', data: true }));
    const checkSearchCities = searchedCities.find(v => v.name.toLowerCase() === action.payload.toLowerCase());
    if (checkSearchCities) {
        store.dispatch(headerSetter({ type: 'cityLoading', data: false }));
        return store.dispatch(headerSetter({ type: 'city', data: checkSearchCities }));
    }
    const checkLargeCities = largeCities.find(v => v.name.toLowerCase() === action.payload.toLowerCase());
    if (checkLargeCities) {
        store.dispatch(headerSetter({ type: 'cityLoading', data: false }));
        return store.dispatch(headerSetter({ type: 'city', data: checkLargeCities }));
    }
    const { data, success } = await getCityService(action.payload);
    store.dispatch(headerSetter({ type: 'cityLoading', data: false }));
    if (!success) return;
    store.dispatch(headerSetter({ type: 'city', data }));
    store.dispatch(headerSetter({ type: 'searchedCities', data: [...searchedCities, data] }));
};

const saveNoteMW = store => next => async action => {
    if (action.type !== 'user/save-note') return next(action);
    const { headerReducer: { searchedCities, city }, homeReducer: { largeCities } } = store.getState();
    let newCity = { ...city };
    const newSearchedCities = JSON.parse(JSON.stringify(searchedCities));
    const newLargeCities = JSON.parse(JSON.stringify(largeCities));
    const checkSearchCities = searchedCities.findIndex(v => v.name.toLowerCase() === action.payload.name.toLowerCase());
    const checkLargeCities = largeCities.findIndex(v => v.name.toLowerCase() === action.payload.name.toLowerCase());
    newCity.notes = newCity.notes ? [...newCity.notes, { note: action.payload.note, time: Date() }] : [{ note: action.payload.note, time: Date() }];
    store.dispatch(headerSetter({ type: 'city', data: newCity }));
    if (checkSearchCities !== -1) {
        newSearchedCities[checkSearchCities].notes = newSearchedCities[checkSearchCities].notes ? [...newSearchedCities[checkSearchCities].notes, { note: action.payload.note, time: Date() }] : [{ note: action.payload.note, time: Date() }];
        store.dispatch(headerSetter({ type: 'searchedCities', data: newSearchedCities }));
    }

    if (checkLargeCities !== -1) {
        newLargeCities[checkLargeCities].notes = newLargeCities[checkLargeCities].notes ? [...newLargeCities[checkLargeCities].notes, { note: action.payload.note, time: Date() }] : [{ note: action.payload.note, time: Date() }];
        store.dispatch(homeSetter({ type: 'largeCities', data: newLargeCities }));
    }

};

const deleteNoteMW = store => next => action => {
    if (action.type !== 'user/delete-note') return next(action);
    const { headerReducer: { searchedCities, city }, homeReducer: { largeCities } } = store.getState();
    let newCity = JSON.parse(JSON.stringify(city));
    const newSearchedCities = JSON.parse(JSON.stringify(searchedCities));
    const newLargeCities = JSON.parse(JSON.stringify(largeCities));
    const checkSearchCities = searchedCities.findIndex(v => v.name.toLowerCase() === action.payload.name.toLowerCase());
    const checkLargeCities = largeCities.findIndex(v => v.name.toLowerCase() === action.payload.name.toLowerCase());
    newCity.notes.splice(action.payload.index, 1);
    store.dispatch(headerSetter({ type: 'city', data: newCity }));
    if (checkSearchCities !== -1) {
        newSearchedCities[checkSearchCities].notes.splice(action.payload.index, 1);
        store.dispatch(headerSetter({ type: 'searchedCities', data: newSearchedCities }));
    }
    if (checkLargeCities !== -1) {
        newLargeCities[checkLargeCities].notes.splice(action.payload.index, 1);
        store.dispatch(homeSetter({ type: 'largeCities', data: newLargeCities }));
    }

};

const updateNoteMW = store => next => action => {
    if (action.type !== 'user/update-note') return next(action);
    const { headerReducer: { searchedCities, city }, homeReducer: { largeCities } } = store.getState();
    let newCity = JSON.parse(JSON.stringify(city));
    const newSearchedCities = JSON.parse(JSON.stringify(searchedCities));
    const newLargeCities = JSON.parse(JSON.stringify(largeCities));
    const checkSearchCities = searchedCities.findIndex(v => v.name.toLowerCase() === action.payload.name.toLowerCase());
    const checkLargeCities = largeCities.findIndex(v => v.name.toLowerCase() === action.payload.name.toLowerCase());
    newCity.notes[action.payload.index].note = action.payload.note;
    store.dispatch(headerSetter({ type: 'city', data: newCity }));
    if (checkSearchCities !== -1) {
        newSearchedCities[checkSearchCities].notes[action.payload.index].note = action.payload.note;
        store.dispatch(headerSetter({ type: 'searchedCities', data: newSearchedCities }));
    }
    if (checkLargeCities !== -1) {
        newLargeCities[checkLargeCities].notes[action.payload.index].note = action.payload.note;
        store.dispatch(homeSetter({ type: 'largeCities', data: newLargeCities }));
    }
};

export default [getCityMW, saveNoteMW, deleteNoteMW, updateNoteMW];