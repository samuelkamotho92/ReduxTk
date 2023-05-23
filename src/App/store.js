import {configureStore} from '@reduxjs/toolkit';
//import your reducers function of all features you want
import counterReducer from '../features/counter/counterSlice'
import authReducer from '../features/authentication/authSlice'
export const store = configureStore({
    reducer:{
counter:counterReducer,
auth:authReducer
    }
})