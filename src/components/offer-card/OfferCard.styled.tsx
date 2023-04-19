import styled from '@emotion/styled';
import { Card, Typography, Chip, Radio } from '@mui/material';
import '@fontsource/dm-sans';

export const PlanOfferCard = styled(Card)(() => ({
  padding: 20,
  width: '330px',
  background: 'white',
  borderRadius: 15,
  border: '1px solid #191847',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  boxSizing: 'border-box',
  margin: '12px 0px',
  cursor: 'pointer',
}));

export const PlanOfferInfoSection = styled.section(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const PlanOfferRadioSection = styled.section(() => ({}));

export const PlanOfferTitle = styled(Typography)(() => ({
  fontFamily: 'DM Sans',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '18px',
  color: '#191847',
}));

export const PlanOfferPriceSection = styled.div(() => ({
  display: 'inherit',
}));

export const PlanOfferPrice = styled(Typography)(() => ({
  fontFamily: 'DM Sans',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  color: '#191847',
}));

export const PlanOfferDiscountChip = styled(Chip)(() => ({
  fontFamily: 'DM Sans',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '13px',
  color: 'white',
  letterSpacing: '-0.02em',
  backgroundColor: '#F5850B',
  width: 40,
  height: 16,
  marginLeft: 12,
}));

export const PlanOfferInstallments = styled(Typography)(() => ({
  fontFamily: 'DM Sans',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '13px',
  color: '#F5850B',
  letterSpacing: '-0.02em',
}));

export const PlanOfferRadio = styled(Radio)(() => ({
  color: '#F4F3F6',
  padding: 0,
  '& svg': {
    width: 16,
    heigh: 16,
  },
  '&.Mui-checked': {
    color: '#191847',
  },
}));
