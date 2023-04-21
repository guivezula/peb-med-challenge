import mockFetch from 'jest-fetch-mock';
import { OFFERS_DATA_MOCK } from '../../../constants/mocks';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import Offer from '../Offer';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => jest.fn(),
}));

const offerRender = async () => {
  mockFetch.mockResponse((req) => {
    if (req.url.includes('offer')) {
      return Promise.resolve(JSON.stringify(OFFERS_DATA_MOCK));
    }

    return Promise.reject(new Error('not mapped url'));
  });
  render(
    <Provider store={store}>
      <Offer />
    </Provider>,
  );
  await waitFor(() =>
    expect(screen.getByTestId('offer-list-section').childNodes).toHaveLength(
      OFFERS_DATA_MOCK.length,
    ),
  );
};

describe('Offer page', () => {
  beforeEach(() => {
    mockFetch.enableMocks();
    mockFetch.resetMocks();
  });

  it('should render the offer page', async () => {
    await offerRender();
    expect(screen.getByText('Estamos quase lá!')).toBeInTheDocument();
    expect(screen.getByText('Confira seu plano:')).toBeInTheDocument();
  });
});
