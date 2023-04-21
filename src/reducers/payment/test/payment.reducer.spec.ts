import {
  PAYMENT_DATA_MOCK,
  PAYMENT_ERROR_MOCK,
} from '../../../constants/mocks';
import { postPayment, resetPayment, setPayment } from '../payment.actions';
import { paymentReducer } from '../payment.reducer';

describe('Payment Reducer', () => {
  it('should return the initial state', () => {
    expect(paymentReducer(undefined, { type: undefined })).toEqual({
      payment: null,
      error: null,
    });
  });

  it('should not change payment or error on action pending', () => {
    const action = { type: postPayment.pending };
    const state = paymentReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        payment: null,
        error: null,
      }),
    );
  });

  it('should change error on action rejected', () => {
    const action = {
      type: postPayment.rejected,
      payload: PAYMENT_ERROR_MOCK,
    };
    const state = paymentReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        error: PAYMENT_ERROR_MOCK,
        payment: null,
      }),
    );
  });

  it('should change payment on action fulfilled', () => {
    const action = {
      type: postPayment.fulfilled,
      payload: PAYMENT_DATA_MOCK,
    };
    const state = paymentReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        payment: PAYMENT_DATA_MOCK,
        error: null,
      }),
    );
  });

  it('should reset payment on the state', () => {
    const state = paymentReducer(undefined, resetPayment());

    expect(state).toEqual(
      expect.objectContaining({
        payment: null,
      }),
    );
  });

  it('should set payment on the state', () => {
    const state = paymentReducer(undefined, setPayment(PAYMENT_DATA_MOCK));

    expect(state).toEqual(
      expect.objectContaining({
        payment: PAYMENT_DATA_MOCK,
      }),
    );
  });
});
