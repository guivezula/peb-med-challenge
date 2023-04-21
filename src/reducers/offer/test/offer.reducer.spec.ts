import { OFFERS_DATA_MOCK } from '../../../constants/mocks';
import { fetchOffers, setSelectedOffer } from '../offer.actions';
import { offerReducer } from '../offer.reducer';

describe('Offer Reducer', () => {
  it('should return the initial state', () => {
    expect(offerReducer(undefined, { type: undefined })).toEqual({
      offers: [],
      selectedOffer: null,
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

  it('should add the selected offer to the state', () => {
    const state = offerReducer(
      undefined,
      setSelectedOffer(OFFERS_DATA_MOCK[0]),
    );

    expect(state).toEqual(
      expect.objectContaining({
        selectedOffer: OFFERS_DATA_MOCK[0],
      }),
    );
  });
});
