import { Offer } from '../models/offer.interface';

enum OfferPeriod {
  'annually' = 'Anual',
  'monthly' = 'Mensal',
  'daily' = 'Diario',
}

const calcPrice = (offer: Offer): string =>
  (offer.fullPrice - offer.discountAmmount).toFixed(2);

const calcInstallmentsPrice = (offer: Offer): string =>
  ((offer.fullPrice - offer.discountAmmount) / offer.installments).toFixed(2);

const title = (offer: Offer): string =>
  `${(OfferPeriod as Record<string, string>)[offer.period]} | ${
    offer.description
  }`;

const price = (offer: Offer): string =>
  `De R$ ${offer.fullPrice.toFixed(2)} | Por R$ ${calcPrice(offer)}`;

const discount = (offer: Offer) =>
  `-${(offer.discountPercentage * 100).toFixed(0)}%`;

const installments = (offer: Offer) =>
  `${offer.installments}x de R$ ${calcInstallmentsPrice(offer)}/${
    offer.periodLabel
  }`;

const priceWithInstallments = (offer: Offer) =>
  `R$ ${calcPrice(offer)} | ${offer.installments}x R$ ${calcInstallmentsPrice(
    offer,
  )}`;

export const OfferMapper = {
  title,
  price,
  discount,
  installments,
  priceWithInstallments,
};
