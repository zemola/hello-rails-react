import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  greeting: [],
  status: 'idle',
};

export const fetchGreeting = createAsyncThunk('greeting/fetch', async () => {
  try {
    const data = await fetch('http://127.0.0.1:3000/api/v1/messages');

    const res = await data.json();
    if (res.error) {
      return [{ error: res.error }];
    }
    return res.message;
  } catch (error) {
    return error.messages;
  }
});

const GreetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({
        ...state,
        status: 'pending',
      }))
      .addCase(fetchGreeting.fulfilled, (state, { payload }) => ({
        ...state,
        greeting: payload,
        status: 'idle',
      }))
      .addCase(fetchGreeting.rejected, (state, { error }) => ({
        ...state,
        status: error,
      }));
  },
});

export default GreetingSlice.reducer;