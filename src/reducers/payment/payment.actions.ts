import { createAsyncThunk } from '@reduxjs/toolkit';
import { Payment, PaymentError } from '../../models/payment.interface';
import { PaymentService } from './payment.service';

export const postPayment = createAsyncThunk<Payment | PaymentError, Payment>(
  'payment/fetchPayment',
  (params: Partial<Payment>) => PaymentService.paymentSubscription(params),
);
