import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../../models/offer.interface';
import { fetchOffers } from './offer.actions';

interface OfferState {
  offers: Offer[];
}

const initialState: OfferState = {
  offers: []
};

export const offerReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchOffers.pending, (state) => ({
    ...state,
    offers: []
  }));

  builder.addCase(fetchOffers.rejected, (state) => ({
    ...state,
    offers: []
  }));

  builder.addCase(fetchOffers.fulfilled, (state, action) => ({
    ...state,
    offers: action.payload
  }));
});
