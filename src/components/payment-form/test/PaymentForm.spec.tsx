import PaymentForm, { PaymentFormProps } from '../PaymentForm';
import { fireEvent, render, screen } from '@testing-library/react';
import { OFFERS_DATA_MOCK, PAYMENT_DATA_MOCK } from '../../../constants/mocks';
import userEvent from '@testing-library/user-event';

const renderForm = (props: PaymentFormProps) => {
  return render(<PaymentForm {...props} />);
};

describe('PaymentForm component', () => {
  let props: PaymentFormProps;
  let handler = jest.fn();

  beforeAll(() => {
    props = {
      offer: undefined,
      onSubmit: handler,
    };
  });

  test('should not call onSubmit when no fields filled', async () => {
    renderForm(props);

    const button = screen.getByTestId('button-submit');
    await userEvent.click(button);

    expect(handler).not.toBeCalled();
  });

  test('should not call onSubmit when offer is undefined', async () => {
    const { getByTestId } = renderForm(props);

    const field1 = getByTestId('creditCardNumber').querySelector(
      'input',
    ) as any;
    fireEvent.change(field1, {
      target: { value: PAYMENT_DATA_MOCK.creditCardNumber },
    });

    const field2 = getByTestId('creditCardExpirationDate').querySelector(
      'input',
    ) as any;
    fireEvent.change(field2, {
      target: { value: PAYMENT_DATA_MOCK.creditCardExpirationDate },
    });

    const field3 = getByTestId('creditCardCVV').querySelector('input') as any;
    fireEvent.change(field3, {
      target: { value: PAYMENT_DATA_MOCK.creditCardCVV },
    });

    const field4 = getByTestId('creditCardHolder').querySelector(
      'input',
    ) as any;
    fireEvent.change(field4, {
      target: { value: PAYMENT_DATA_MOCK.creditCardHolder },
    });

    const field5 = getByTestId('creditCardCPF').querySelector('input') as any;
    fireEvent.change(field5, {
      target: { value: PAYMENT_DATA_MOCK.creditCardCPF },
    });

    const button = getByTestId('button-submit');
    await userEvent.click(button);

    expect(handler).not.toBeCalled();
  });

  test('should call onSubmit when all fields filled', async () => {
    const localhandler = jest.fn();
    const { getByTestId } = renderForm({
      ...props,
      offer: OFFERS_DATA_MOCK[0],
      onSubmit: localhandler,
    });

    const field1 = getByTestId('creditCardNumber').querySelector(
      'input',
    ) as any;
    fireEvent.change(field1, {
      target: { value: PAYMENT_DATA_MOCK.creditCardNumber },
    });
    expect(field1).toHaveValue(String(PAYMENT_DATA_MOCK.creditCardNumber));

    const field2 = getByTestId('creditCardExpirationDate').querySelector(
      'input',
    ) as any;
    fireEvent.change(field2, {
      target: { value: PAYMENT_DATA_MOCK.creditCardExpirationDate },
    });
    expect(field2).toHaveValue(
      String(PAYMENT_DATA_MOCK.creditCardExpirationDate),
    );

    const field3 = getByTestId('creditCardCVV').querySelector('input') as any;
    fireEvent.change(field3, {
      target: { value: PAYMENT_DATA_MOCK.creditCardCVV },
    });
    expect(field3).toHaveValue(String(PAYMENT_DATA_MOCK.creditCardCVV));

    const field4 = getByTestId('creditCardHolder').querySelector(
      'input',
    ) as any;
    fireEvent.change(field4, {
      target: { value: PAYMENT_DATA_MOCK.creditCardHolder },
    });
    expect(field4).toHaveValue(String(PAYMENT_DATA_MOCK.creditCardHolder));

    const field5 = getByTestId('creditCardCPF').querySelector('input') as any;
    fireEvent.change(field5, {
      target: { value: PAYMENT_DATA_MOCK.creditCardCPF },
    });
    expect(field5).toHaveValue(String(PAYMENT_DATA_MOCK.creditCardCPF));

    const field6 = getByTestId('installments');
    fireEvent.keyDown(field6.firstChild as any, { keyCode: 40 });
    const option = await screen.findByText('9');
    fireEvent.click(option);
    expect(field6.querySelector('input')).toHaveValue(String(9));

    const button = getByTestId('button-submit');
    await userEvent.click(button);

    expect(localhandler).toBeCalled();
  });
});
