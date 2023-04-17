import { API_URL } from '../../constants/env';
import { Payment, PaymentError } from '../../models/payment.interface';

const paymentSubscription = async (params: Partial<Payment>): Promise<Payment | PaymentError> => {
  return await fetch(`${API_URL}/subscription`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());
};

export const PaymentService = {
  paymentSubscription
};
