import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../../models/offer.interface';
import { fetchOffers, setSelectedOffer } from './offer.actions';

interface OfferState {
  offers: Offer[];
  selectedOffer: Offer | null;
}

const initialState: OfferState = {
  offers: [],
  selectedOffer: null,
};

export const offerReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchOffers.pending, (state) => ({
    ...state,
    offers: [],
  }));

  builder.addCase(fetchOffers.rejected, (state) => ({
    ...state,
    offers: [],
  }));

  builder.addCase(fetchOffers.fulfilled, (state, action) => ({
    ...state,
    offers: action.payload,
  }));

  builder.addCase(setSelectedOffer, (state, action) => ({
    ...state,
    selectedOffer: action.payload,
  }));
});
