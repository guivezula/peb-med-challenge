import styled from "@emotion/styled";
import { Button, Card, Link, SvgIcon, Typography } from "@mui/material";

export const SuccessContent = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
});

export const ShapeCircle = styled.div({
    backgroundColor: '#E1DEE8',
    borderRadius: '50%',
    width: 40,
    height: 40,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
});

export const ShapeImage = styled.img({
    position: 'relative',
    transform: 'translate(12px, 0px)'
});

export const SuccessTitle = styled(Typography)({
    color: '#191847',
    marginTop: '18px',
    fontSize: '20px',
    lineHeight: '25px',
    textAlign: 'center',
    fontFamily: 'Google Sans',
    fontStyle: 'normal',
    fontWeight: '400',
});

export const SuccessInfo = styled(Typography)({
    color: '#C9C5D4',
    marginTop: '11px',
    fontSize: '16px',
    lineHeight: '20px',
    textAlign: 'center',
    wordWrap: 'normal',
    inlineSize: '194px',
    fontFamily: 'Google Sans',
    fontStyle: 'normal',
    fontWeight: '400',
});

export const SuccessUserCard = styled(Card)({
    width: '343px',
    padding: '15px 16px 34px 16px',
    margin: '57px 0px 88px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
});

export const SuccessOfferCard = styled(Card)({
    padding: 20,
    display: "flex",
    justifyContent: 'space-between',
    textAlign: 'right',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#191847',
    boxShadow: 'unset',
    borderRadius: 15,
    background: '#F4F3F6',
    marginBottom: 19,
});

export const SuccessOfferCardText = styled(Typography)({
    fontFamily: 'Google Sans',
    fontStyle: 'normal',
    fontWeight: '400',

});

export const SuccessUserCardText = styled(Typography, { shouldForwardProp: (prop) => prop !== "label" })<{ label?: boolean; }>(({ label }) => ({
    fontFamily: 'Google Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    color: label ? '#C9C5D4' : '#151516',
    textAlign: label ? 'left' : 'right',
}));

export const SuccessManagementLink = styled(Link)({
    fontFamily: 'Google Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: '0.05em',
    color: '#191847',
    textDecoration: 'none',
    fontSize: '12px',
    lineHeight: '15px',
    marginBottom: '24px',
});

export const SuccessHomeButton = styled(Button)({
    color: 'white',
    backgroundColor: '#191847',
    borderRadius: 25,
    fontSize: '12px',
    lineHeight: '15px',
    fontFamily: 'Google Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: '0.05em',
    width: 310,
    height: 50,
  });

export const SuccessUserCardItem = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});
