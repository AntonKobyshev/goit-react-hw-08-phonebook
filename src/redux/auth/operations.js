import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    setAuthHeader(data.token);
    toast.info('You have successfully registered and logged in!')
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(toast.error('Something went wrong'));
  }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('users/login', credentials);
    setAuthHeader(data.token);
    toast.info('You have successfully logged in!') 
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(toast.error('Something went wrong'));
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('users/logout');
    toast.info('You have successfully logged out!')
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(toast.error('Something went wrong'));
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;
  if (!token) return thunkAPI.rejectWithValue('Something went wrong');

  setAuthHeader(token);

  try {
    const { data } = await axios.get('users/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(toast.error('Something went wrong'));
  }
});