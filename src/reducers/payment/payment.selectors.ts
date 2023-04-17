import { RootState } from '../../app/store';

export const selectPayment = (state: RootState) => state.payment.payment;

export const selectPaymentError = (state: RootState) => state.payment.error;
