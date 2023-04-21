import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Payment, PaymentError } from '../../models/payment.interface';
import { PaymentService } from './payment.service';

export const postPayment = createAsyncThunk<
  Partial<Payment> | PaymentError,
  Partial<Payment>
>('payment/fetchPayment', (params: Partial<Payment>) =>
  PaymentService.paymentSubscription(params),
);

export const resetPayment = createAction('payment/reset');

export const setPayment = createAction<Payment | null>('payment/setPayment');
