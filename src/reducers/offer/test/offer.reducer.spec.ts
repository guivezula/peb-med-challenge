import { OFFERS_DATA_MOCK } from '../../../constants/mocks';
import { fetchOffers } from '../offer.actions';
import { offerReducer } from '../offer.reducer';

describe('Offer Reducer', () => {
  it('should return the initial state', () => {
    expect(offerReducer(undefined, { type: undefined })).toEqual({
      offers: [],
    });
  });

  it('should not change the offers list on action pending', () => {
    const action = { type: fetchOffers.pending };
    const state = offerReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        offers: [],
      }),
    );
  });

  it('should not change the offers list on action rejected', () => {
    const action = { type: fetchOffers.rejected };
    const state = offerReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        offers: [],
      }),
    );
  });

  it('should change the offers list on action fulfilled', () => {
    const action = {
      type: fetchOffers.fulfilled,
      payload: OFFERS_DATA_MOCK,
    };
    const state = offerReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        offers: OFFERS_DATA_MOCK,
      }),
    );
  });
});
