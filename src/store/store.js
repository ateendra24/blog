import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import themeSwitch from './themeSwitch'

const store = configureStore({
    reducer: {
        auth : authSlice,
        themeSwitch,
    }

});


export default store;