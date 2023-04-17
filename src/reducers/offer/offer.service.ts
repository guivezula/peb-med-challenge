import { API_URL } from '../../constants/env';
import { Offer } from '../../models/offer.interface';

const getAll = async (): Promise<Offer[]> =>
  await fetch(`${API_URL}/offer`).then((response) => response.json());

export const OfferService = {
  getAll
};
