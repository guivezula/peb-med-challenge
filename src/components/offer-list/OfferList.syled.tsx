import styled from '@emotion/styled';
import { Chip, Typography } from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export const PlanOfferListContent = styled.div(() => ({
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    width: 330,
}));

export const PlanOfferListHeader = styled.header(() => ({
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '26px',
    letterSpacing: '-0.02em',
    color: '#151516',
    marginBottom: 10,
}));

export const PlanOfferEmailChip = styled(Chip)(() => ({
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
    color: '#151516',
    letterSpacing: '-0.02em',
    height: 24,
    marginLeft: 12,
    border: '1px solid #F4F3F6',
    margin: 0,
}));

export const PlanOfferListSection = styled.section(() => ({
    marginTop: 34,
    marginBottom: 30,
}));

export const PlanOfferListHelp = styled(Typography)(() => ({
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#151516',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

export const PlanOfferListHelpIcon = styled(HelpOutlineOutlinedIcon)(() => ({
    width: 16.67,
    height: 16.67,
    color: '#151516',
    marginLeft: 12.67,
}))
  