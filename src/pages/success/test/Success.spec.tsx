import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import Success from '../Success';
import { setSelectedOffer } from '../../../reducers/offer/offer.actions';
import { OFFERS_DATA_MOCK, PAYMENT_DATA_MOCK } from '../../../constants/mocks';
import { setPayment } from '../../../reducers/payment/payment.actions';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => jest.fn(),
}));

const successRender = () => {
  render(
    <Provider store={store}>
      <Success />
    </Provider>,
  );
};

describe('Success page', () => {
  beforeEach(() => {
    store.dispatch(setSelectedOffer(OFFERS_DATA_MOCK[0]));
    store.dispatch(setPayment(PAYMENT_DATA_MOCK));
  });

  it('should render the success page', () => {
    successRender();
    expect(screen.getByText('Parabéns!')).toBeInTheDocument();
    expect(
      screen.getByText('Sua assinatura foi realizada com sucesso.'),
    ).toBeInTheDocument();
  });

  it('should render offer information', () => {
    successRender();

    expect(screen.getByTestId('success-offer-title')).toHaveTextContent(
      'Anual | Parcelado',
    );
    expect(screen.getByTestId('success-offer-price')).toHaveTextContent(
      'R$ 540.00 | 12x R$ 45.00',
    );
  });

  it('should render user email', () => {
    successRender();

    expect(screen.getByTestId('success-user-email')).toHaveTextContent(
      'fulano@cicrano.com.br',
    );
  });

  it('should render payment CPF', () => {
    successRender();

    expect(screen.getByTestId('success-payment-cpf')).toHaveTextContent(
      '98765432100',
    );
  });
});
