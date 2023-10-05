import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contacts from './contacts/contacts';
import filter from './filter/filter';
import { persistStore, persistReducer } from 'redux-persist'; // Импортируйте persistStore и persistReducer из redux-persist
import storage from 'redux-persist/lib/storage'; // Выберите метод хранения, который вы хотите использовать (localStorage, sessionStorage и другие)

const rootReducer = combineReducers({
  contacts,
  filter,
});

const persistConfig = {
  key: 'root', // Уникальный ключ для хранения данных в локальном хранилище
  storage, // Метод хранения (по умолчанию localStorage)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
