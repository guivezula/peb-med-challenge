import { createReducer } from '@reduxjs/toolkit';
import { Payment, PaymentError } from '../../models/payment.interface';
import { postPayment, resetPayment } from './payment.actions';

interface PaymentState {
  payment: Payment | null;
  error: PaymentError | null;
}

const initialState: PaymentState = {
  payment: null,
  error: null,
};

export const paymentReducer = createReducer(initialState, (builder) => {
  builder.addCase(postPayment.pending, (state) => ({
    ...state,
    payment: null,
    error: null,
  }));

  builder.addCase(postPayment.rejected, (state, action) => ({
    ...state,
    payment: null,
    error: action.payload as PaymentError,
  }));

  builder.addCase(postPayment.fulfilled, (state, action) => ({
    ...state,
    payment: action.payload as Payment,
    error: null,
  }));

  builder.addCase(resetPayment, (state) => ({
    ...state,
    payment: null,
  }));
});
