import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { offerReducer } from '../reducers/offer/offer.reducer';
import { paymentReducer } from '../reducers/payment/payment.reducer';

export const store = configureStore({
  reducer: {
    offer: offerReducer,
    payment: paymentReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
