import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../../models/offer.interface';
import { OfferService } from './offer.service';

export const fetchOffers = createAsyncThunk<Offer[]>(
  'offer/fetchOffers',
  OfferService.getAll,
);

export const setSelectedOffer = createAction<Offer | null> (
  'offer/setSelectedOffer',
);
