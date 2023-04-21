import { fireEvent, render, screen } from '@testing-library/react';
import OfferCard, { OfferCardProps } from '../OfferCard';
import { OFFERS_DATA_MOCK } from '../../../constants/mocks';
import { Simulate } from 'react-dom/test-utils';

const renderOfferCard = (props: OfferCardProps) => {
  return render(<OfferCard {...props} />);
};

describe('OfferCard component', () => {
  let props: OfferCardProps;

  beforeAll(() => {
    props = {
      checked: false,
      offer: OFFERS_DATA_MOCK[0],
      onSelect: jest.fn(),
    };
  });

  it('should show formatted offer title', () => {
    renderOfferCard(props);

    const title = screen.getByText('Anual | Parcelado');

    expect(title).toBeInTheDocument();
  });

  it('should show formatted price', () => {
    renderOfferCard(props);

    const price = screen.getByText('De R$ 600.00 | Por R$ 540.00');

    expect(price).toBeInTheDocument();
  });

  it('should show formmated porcentage', () => {
    renderOfferCard(props);

    const porcentage = screen.getByText('-10%');

    expect(porcentage).toBeInTheDocument();
  });

  it('should show formmated installments', () => {
    renderOfferCard(props);

    const installments = screen.getByText('12x de R$ 45.00/mês');

    expect(installments).toBeInTheDocument();
  });

  it('should card to be checked', () => {
    const localProps = { ...props, checked: true };
    const { container } = renderOfferCard(localProps);

    const checkedClass = container.getElementsByClassName('Mui-checked');

    expect(checkedClass.length).toBe(1);
  });

  it('should card not to be checked', () => {
    const { container } = renderOfferCard(props);

    const checkedClass = container.getElementsByClassName('Mui-checked');

    expect(checkedClass.length).toBe(0);
  });

  it('should call handler when radio selected', () => {
    const handler = jest.fn();
    const localProps = { ...props, onSelect: handler };

    renderOfferCard(localProps);

    const card = screen.getByTestId('offer-card-32');
    fireEvent.click(card);

    expect(handler).toHaveBeenCalled();
  });
});
