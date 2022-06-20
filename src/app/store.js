import { configureStore } from '@reduxjs/toolkit';
import cartReducer from 'features/cart/cartReducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
