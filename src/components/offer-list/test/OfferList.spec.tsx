import { fireEvent, render, screen } from '@testing-library/react';
import OfferList, { OfferListProps } from '../OfferList';
import { OFFERS_DATA_MOCK } from '../../../constants/mocks';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

const renderOfferList = (props: OfferListProps) => {
  return render(
    <Provider store={store}>
      <OfferList {...props} />
    </Provider>
  );
};

describe('OfferList component', () => {
  let props: OfferListProps;
  beforeAll(() => {
    props = {
      email: 'any@email.com',
      offers: OFFERS_DATA_MOCK,
    };
  });

  test('should show header', () => {
    renderOfferList(props);

    const header = screen.getByText('Confira seu plano:');

    expect(header).toBeInTheDocument();
  });

  test('should show email', () => {
    renderOfferList(props);

    const email = screen.getByText('any@email.com');

    expect(email).toBeInTheDocument();
  });

  test('should render offer list', () => {
    renderOfferList(props);

    const offerItemsCount =
      screen.getByTestId('offer-list-section').childNodes.length;

    expect(offerItemsCount).toBe(OFFERS_DATA_MOCK.length);
  });

  test('should show help info', () => {
    renderOfferList(props);

    const helpInfo = screen.getByText('Sobre a cobrança');

    expect(helpInfo).toBeInTheDocument();
  });

  test('should show help icon', () => {
    renderOfferList(props);

    const icon = screen.getByTestId('help-icon');

    expect(icon).toBeInTheDocument();
  });
});
