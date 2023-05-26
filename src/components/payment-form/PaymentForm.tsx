import React from 'react';
import { Payment } from '../../models/payment.interface';
import {
  FormButton,
  FormTextField,
  PaymentFormBrandsSection,
  PaymentFormContent,
  PaymentFormFieldsSection,
  PaymentFormHeader,
  PaymentFormInlineFieldsSection,
  PaymentFormSubHeader,
} from './PaymentForm.styled';
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Offer } from '../../models/offer.interface';
import { SharedMapper } from '../../mapper/shared.mapper';
import { useForm } from 'react-hook-form';
import brands from '../../img/brands.png';
import { USER_MOCK } from '../../constants/mocks';
import { MaskedInput } from './utils/masked-input.utils';
import { DateFormatUtils } from './utils/date-format.utils';

export interface PaymentFormProps {
  offer: Offer | null;
  onSubmit: (payment: Partial<Payment>) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ offer, onSubmit }) => {
  const loggedUser = USER_MOCK;

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<Partial<Payment>>();

  const handler = handleSubmit((data) => {
    data = {
      ...data,
      userId: loggedUser.id,
      offerId: offer?.id,
      gateway: offer?.gateway,
    };
    onSubmit(data);
  });

  return (
    <PaymentFormContent>
      <PaymentFormHeader>{'Estamos quase lá!'}</PaymentFormHeader>
      <PaymentFormSubHeader>
        {'Insira seus dados de pagamento abaixo:'}
      </PaymentFormSubHeader>
      <PaymentFormBrandsSection>
        <img src={brands} />
      </PaymentFormBrandsSection>
      <PaymentFormFieldsSection>
        <FormTextField
          data-testid="creditCardNumber"
          fullWidth
          label="Número do cartão"
          variant="standard"
          error={!!errors.creditCardNumber}
          inputProps={{
            placeholder: '0000 0000 0000 0000',
            mask: '9999 9999 9999 9999',
          }}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputComponent: MaskedInput as any,
          }}
          {...register('creditCardNumber', { required: true })}
        />
        <PaymentFormInlineFieldsSection>
          <FormTextField
            data-testid="creditCardExpirationDate"
            label="Validade"
            variant="standard"
            inputProps={{
              placeholder: 'MM/AA',
              mask: DateFormatUtils.mask,
              formatChars: DateFormatUtils.formatChars,
              beforeMaskedValueChange: DateFormatUtils.beforeMaskedValueChange,
            }}
            error={!!errors.creditCardExpirationDate}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ inputComponent: MaskedInput as any }}
            {...register('creditCardExpirationDate', { required: true })}
          />
          <FormTextField
            data-testid="creditCardCVV"
            label="CVV"
            variant="standard"
            inputProps={{ placeholder: '000', mask: '999' }}
            InputProps={{ inputComponent: MaskedInput as any }}
            error={!!errors.creditCardCVV}
            InputLabelProps={{
              shrink: true,
            }}
            {...register('creditCardCVV', { required: true })}
          />
        </PaymentFormInlineFieldsSection>
        <FormTextField
          data-testid="creditCardHolder"
          fullWidth
          label="Nome impresso no cartão"
          variant="standard"
          inputProps={{ placeholder: 'Seu nome' }}
          error={!!errors.creditCardHolder}
          InputLabelProps={{
            shrink: true,
          }}
          {...register('creditCardHolder', { required: true })}
        />
        <FormTextField
          data-testid="creditCardCPF"
          fullWidth
          label="CPF"
          variant="standard"
          inputProps={{ placeholder: '000.000.000-00', mask: '999.999.999-99' }}
          InputProps={{ inputComponent: MaskedInput as any }}
          error={!!errors.creditCardCPF}
          InputLabelProps={{
            shrink: true,
          }}
          {...register('creditCardCPF', { required: true })}
        />
        <FormTextField
          fullWidth
          label="Cupom"
          variant="standard"
          inputProps={{ placeholder: 'Insira aqui' }}
          InputLabelProps={{
            shrink: true,
          }}
          {...register('couponCode')}
        />
        <InputLabel
          style={{ fontSize: 12 }}
          error={
            !!errors.installments || (!offer && touchedFields.installments)
          }
          id="select-label"
        >
          {'Número de parcelas'}
        </InputLabel>
        <Select
          data-testid="installments"
          labelId="select-label"
          fullWidth
          variant="standard"
          disabled={!offer}
          defaultValue={'0'}
          error={
            !!errors.installments || (!offer && touchedFields.installments)
          }
          {...register('installments', { required: true })}
        >
          <MenuItem value={'0'}>
            <em>Selecione</em>
          </MenuItem>
          {offer &&
            SharedMapper.getArray(offer.installments).map((installment) => (
              <MenuItem key={installment} value={installment}>
                {installment}
              </MenuItem>
            ))}
        </Select>
      </PaymentFormFieldsSection>
      <FormButton
        data-testid="button-submit"
        fullWidth
        variant="contained"
        onClick={handler}
      >
        {'Finalizar pagamento'}
      </FormButton>
    </PaymentFormContent>
  );
};

export default PaymentForm;
