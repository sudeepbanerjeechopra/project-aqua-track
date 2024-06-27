import { combineReducers, configureStore } from '@reduxjs/toolkit';
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
import modalSlice from './modal/slice';
import { setupAxiosInterceptors } from './auth/operation';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken'],
};

const modalPersistConfig = {
  key: 'modal',
  storage,
  whitelist: ['isOpen'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const persistedModalReducer = persistReducer(modalPersistConfig, modalSlice);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  modal: persistedModalReducer,
});

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

setupAxiosInterceptors(store);

export const persistor = persistStore(store);
