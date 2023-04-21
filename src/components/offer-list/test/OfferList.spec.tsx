import { fireEvent, render, screen } from '@testing-library/react';
import OfferList, { OfferListProps } from '../OfferList';
import { OFFERS_DATA_MOCK } from '../../../constants/mocks';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

const renderOfferList = (props: OfferListProps) => {
  return render(
    <Provider store={store}>
      <OfferList {...props} />
    </Provider>,
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

  it('should show email', () => {
    renderOfferList(props);

    const email = screen.getByText('any@email.com');

    expect(email).toBeInTheDocument();
  });

  it('should render offer list', () => {
    renderOfferList(props);

    const offerItemsCount =
      screen.getByTestId('offer-list-section').childNodes.length;

    expect(offerItemsCount).toBe(OFFERS_DATA_MOCK.length);
  });
});
