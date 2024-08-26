// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import newsReducer from './newsSlice';

const persistConfig = {
  key: 'news',
  storage,
  blacklist: ['keyword'], 
};

const persistedNewsReducer = persistReducer(persistConfig, newsReducer);

export const store = configureStore({
  reducer: {
    news: persistedNewsReducer,
  },
});

export const persistor = persistStore(store);
