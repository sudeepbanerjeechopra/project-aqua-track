import { configureStore } from '@reduxjs/toolkit';
import waterModalSlice from '../redux/water/slice';
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import { authReducer } from './auth/slice';
import { setupAxiosInterceptors } from './auth/operation';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'refreshToken'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        water: waterModalSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

setupAxiosInterceptors(store);

export const persistor = persistStore(store);
