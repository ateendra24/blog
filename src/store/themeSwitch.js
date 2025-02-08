import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: localStorage.getItem('theme') || 'light', // Load the theme from localStorage, default to 'light' if not found
};

export const themeSwitch = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    light: (themestate) => {
      themestate.status = 'light';
      localStorage.setItem('theme', 'light'); // Save the theme to localStorage
    },
    dark: (themestate) => {
      themestate.status = 'dark';
      localStorage.setItem('theme', 'dark'); // Save the theme to localStorage
    },
  },
});

export const { light, dark } = themeSwitch.actions;

export default themeSwitch.reducer;
