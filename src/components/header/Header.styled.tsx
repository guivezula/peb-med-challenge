import styled from '@emotion/styled';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Grid } from '@mui/material'

export const LogoImage = styled.img(() => ({
  marginTop: 38,
  marginBottom: 38,  
}));

export const BackIcon = styled(ArrowBackIosIcon)(() => ({
    color: '#151516',
    fontSize: '1rem'
}))

export const HeaderContainer = styled.header(() => ({
    marginBottom: 34,  
}));