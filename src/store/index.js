import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import middleware from './rootMiddleware';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(middleware),
    // eslint-disable-next-line no-undef
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
