import React from 'react';
import { Payment } from '../../models/payment.interface';

interface PaymentFormProps {
  onSubmit: (payment: Partial<Payment>) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
  return <div>PaymentForm</div>;
};

export default PaymentForm;
