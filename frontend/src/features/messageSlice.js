import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '1',
  addedMessage: '',
};

export const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    incrementId: (state, action) => {
      state.id = action.payload;
    },
    incrementMessage: (state, action) => {
      state.addedMessage = action.payload;
    },
  },
});

export default messageSlice.reducer;
export const { incrementId , incrementMessage } = messageSlice.actions;
