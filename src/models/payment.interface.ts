export interface Payment {
  id: number;
  couponCode: string | null;
  creditCardCPF: string;
  creditCardCVV: number;
  creditCardExpirationDate: string;
  creditCardHolder: string;
  creditCardNumber: number;
  gateway: string;
  installments: number;
  offerId: number;
  userId: number;
}

export interface PaymentError {
  error: string;
}
