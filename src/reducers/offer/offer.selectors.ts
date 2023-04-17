import { RootState } from '../../app/store';

export const selectOffers = (state: RootState) => state.offer.offers;
