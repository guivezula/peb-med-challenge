import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import mockFetch from 'jest-fetch-mock';
import { OFFERS_DATA_MOCK, PAYMENT_DATA_MOCK } from './constants/mocks';
import userEvent from '@testing-library/user-event';

const appRender = async () => {
  mockFetch.mockResponse((req) => {
    if (req.url.includes('offer')) {
      return Promise.resolve(JSON.stringify(OFFERS_DATA_MOCK));
    }

    return Promise.reject(new Error('not mapped url'));
  });
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  await waitFor(() =>
    expect(screen.getByTestId('offer-list-section').childNodes).toHaveLength(
      OFFERS_DATA_MOCK.length,
    ),
  );
};

describe('Integration Test', () => {
  it('should flow through app', async () => {
    mockFetch.enableMocks();
    mockFetch.resetMocks();

    await appRender();

    // verify if the page Offer with the form and the offer list is rendered
    expect(screen.getByText('Estamos quase lá!')).toBeInTheDocument();
    expect(screen.getByText('Confira seu plano:')).toBeInTheDocument();

    // select an offer
    const card = screen.getByTestId('offer-card-32');
    expect(card).toBeInTheDocument();
    fireEvent.click(card);

    // fill the form with all required information
    const field1 = screen
      .getByTestId('creditCardNumber')
      .querySelector('input') as any;
    fireEvent.change(field1, {
      target: { value: PAYMENT_DATA_MOCK.creditCardNumber },
    });
    expect(field1).toHaveValue(String(PAYMENT_DATA_MOCK.creditCardNumber));

    const field2 = screen
      .getByTestId('creditCardExpirationDate')
      .querySelector('input') as any;
    fireEvent.change(field2, {
      target: { value: PAYMENT_DATA_MOCK.creditCardExpirationDate },
    });
    expect(field2).toHaveValue(
      String(PAYMENT_DATA_MOCK.creditCardExpirationDate),
    );

    const field3 = screen
      .getByTestId('creditCardCVV')
      .querySelector('input') as any;
    fireEvent.change(field3, {
      target: { value: PAYMENT_DATA_MOCK.creditCardCVV },
    });
    expect(field3).toHaveValue(String(PAYMENT_DATA_MOCK.creditCardCVV));

    const field4 = screen
      .getByTestId('creditCardHolder')
      .querySelector('input') as any;
    fireEvent.change(field4, {
      target: { value: PAYMENT_DATA_MOCK.creditCardHolder },
    });
    expect(field4).toHaveValue(String(PAYMENT_DATA_MOCK.creditCardHolder));

    const field5 = screen
      .getByTestId('creditCardCPF')
      .querySelector('input') as any;
    fireEvent.change(field5, {
      target: { value: PAYMENT_DATA_MOCK.creditCardCPF },
    });
    expect(field5).toHaveValue(String(PAYMENT_DATA_MOCK.creditCardCPF));

    const field6 = screen.getByTestId('installments');
    fireEvent.keyDown(field6.firstChild as any, { keyCode: 40 });
    const option = await screen.findByText('9');
    fireEvent.click(option);
    expect(field6.querySelector('input')).toHaveValue(String(9));

    // mock the call to create the payment
    mockFetch.mockResponse((req) => {
      if (req.url.includes('subscription')) {
        return Promise.resolve(JSON.stringify(PAYMENT_DATA_MOCK));
      }
  
      return Promise.reject(new Error('not mapped url'));
    });

    // submit form
    const button = screen.getByTestId('button-submit');
    await userEvent.click(button);

    // this moment is being verified if the Success page has been open
    expect(screen.getByText('Parabéns!')).toBeInTheDocument();
    expect(
      screen.getByText('Sua assinatura foi realizada com sucesso.'),
    ).toBeInTheDocument();

    // verifying if the offer object is correct
    expect(screen.getByTestId('success-offer-title')).toHaveTextContent(
      'Anual | Parcelado',
    );
    expect(screen.getByTestId('success-offer-price')).toHaveTextContent(
      'R$ 540.00 | 12x R$ 45.00',
    );

    // verifying if the payment was loaded by CPF
    expect(screen.getByTestId('success-payment-cpf')).toHaveTextContent(
      '98765432100',
    );

    // clicking o button we navigate back to the form
    const successButton = screen.getByTestId('success-button');
    await userEvent.click(successButton);

    // verifying if the form is redered
    expect(screen.getByText('Estamos quase lá!')).toBeInTheDocument();
    expect(screen.getByText('Confira seu plano:')).toBeInTheDocument();
  });
});
