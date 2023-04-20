import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

export const PaymentFormContent = styled.div(() => ({
  fontFamily: 'DM Sans',
  fontStyle: 'normal',
  fontWeight: 400,
  width: 330,
}));

export const PaymentFormHeader = styled.h1(() => ({
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: '26px',
  letterSpacing: '-0.02em',
  color: '#151516',
  marginBottom: 9,
  marginTop: 0,
}));

export const PaymentFormSubHeader = styled.h2(() => ({
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '21px',
  letterSpacing: '-0.02em',
  color: '#151516',
  marginBottom: 30,
}));

export const PaymentFormFieldsSection = styled.section(() => ({
  '> *:not(:last-child)': {
    marginTop: 30,
  },
}));

export const PaymentFormBrandsSection = styled.section(() => ({
  justifyContent: 'center',
  display: 'flex',
}));

export const PaymentFormInlineFieldsSection = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  '> *:not(:last-child)': {
    marginRight: 50,
  },
}));

export const FormTextField = styled(TextField)({
  '& label.MuiInputLabel-root': {
    color: '#727272',
  },
  '& .MuiInputBase-input': {
    borderBottom: '1px solid #F4F3F6',
  },
});

export const FormButton = styled(Button)({
  color: 'white',
  backgroundColor: '#191847',
  borderRadius: 25,
  textTransform: 'none',
  fontSize: '14px',
  lineHeight: '18px',
  marginTop: 40,
  marginBottom: 64,
});
