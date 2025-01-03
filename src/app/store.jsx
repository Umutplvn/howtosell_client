import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import appDataReducer from '../features/dataSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    appData: appDataReducer
  },
  devTools: false, 
})


export const persistor=persistStore(store)

export default store