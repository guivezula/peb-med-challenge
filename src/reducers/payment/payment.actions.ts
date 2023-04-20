import { createAsyncThunk } from '@reduxjs/toolkit';
import { Payment, PaymentError } from '../../models/payment.interface';
import { PaymentService } from './payment.service';

export const postPayment = createAsyncThunk<
  Partial<Payment> | PaymentError,
  Partial<Payment>
>('payment/fetchPayment', (params: Partial<Payment>) =>
  PaymentService.paymentSubscription(params),
);
