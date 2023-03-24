import { configureStore } from '@reduxjs/toolkit';
import messageReducer from '../features/messageSlice';
import receiverReducer from '../features/receiverSlice';

export const store = configureStore({
  reducer: {
    receiver: receiverReducer,
    messages: messageReducer,
  },
});
