import { Offer } from '../models/offer.interface';
import { Payment, PaymentError } from '../models/payment.interface';

export const OFFERS_DATA_MOCK: Offer[] = [
  {
    id: 32,
    storeId: 'anual_parcelado_iugu',
    title: 'Premium Anual',
    description: 'Parcelado',
    caption: '7 Dias Grátis',
    fullPrice: 600,
    discountAmmount: 60,
    discountPercentage: 0.1,
    periodLabel: 'mês',
    period: 'annually',
    discountCouponCode: null,
    order: 1,
    priority: 1,
    gateway: 'iugu',
    splittable: true,
    installments: 12,
    acceptsCoupon: true,
  },
  {
    id: 33,
    storeId: 'anual_a_vista_iugu',
    title: 'Premium Anual',
    description: 'À Vista',
    caption: '7 Dias Grátis',
    fullPrice: 7200,
    discountAmmount: 720,
    discountPercentage: 0.1,
    periodLabel: 'ano',
    period: 'annually',
    discountCouponCode: null,
    order: 2,
    priority: 2,
    gateway: 'iugu',
    splittable: false,
    installments: 1,
    acceptsCoupon: true,
  },
];

export const PAYMENT_DATA_MOCK: Payment = {
  couponCode: null,
  creditCardCPF: '98765432100',
  creditCardCVV: 123,
  creditCardExpirationDate: '10/21',
  creditCardHolder: 'Cássio Scofield',
  creditCardNumber: 5555444433332222,
  gateway: 'iugu',
  installments: 1,
  offerId: 18,
  userId: 1,
  id: 1,
};

export const PAYMENT_ERROR_MOCK: PaymentError = {
  error: 'some error',
};
