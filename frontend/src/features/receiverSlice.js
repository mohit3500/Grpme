import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  receiverData: {},
};

export const receiverSlice = createSlice({
  name: 'receiver',
  initialState,
  reducers: {
    incrementValue: (state, action) => {
      state.receiverData = action.payload;
    },
  },
});

export default receiverSlice.reducer;
export const { incrementValue } = receiverSlice.actions;
