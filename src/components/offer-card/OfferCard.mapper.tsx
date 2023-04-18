import { Offer } from '../../models/offer.interface';

enum OfferPeriod {
  'annually' = 'Anual',
  'monthly' = 'Mensal',
  'daily' = 'Diario',
}

const title = (offer: Offer): string =>
  `${(OfferPeriod as Record<string, string>)[offer.period]} | ${
    offer.description
  }`;
  
const price = (offer: Offer): string =>
  `De R$ ${offer.fullPrice.toFixed(2)} | Por R$ ${(
    offer.fullPrice - offer.discountAmmount
  ).toFixed(2)}`;

const discount = (offer: Offer) =>
  `-${(offer.discountPercentage * 100).toFixed(0)}%`;

const installments = (offer: Offer) =>
  `${offer.installments}x de R$ ${(
    offer.fullPrice -
    offer.discountAmmount / offer.installments
  ).toFixed(2)}/${offer.periodLabel}`;

export const OfferMapper = {
  title,
  price,
  discount,
  installments,
};
