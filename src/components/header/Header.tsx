import { Grid } from '@mui/material';
import React from 'react';
import { BackIcon, HeaderContainer, LogoImage } from './Header.styled';
import logo from '../../img/logo.png';

export interface HeaderProps {
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBack }) => {
  const handleBack = () => {
    if (!!onBack) {
      onBack();
    }
  };
  return (
    <HeaderContainer>
      <Grid container>
        <Grid
          item
          lg={1}
          md={1}
          sm={1}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <BackIcon data-testid="back-icon" onClick={handleBack} />
        </Grid>
        <Grid
          item
          lg={11}
          md={11}
          sm={11}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <LogoImage data-testid="logo-img" src={logo} />
        </Grid>
      </Grid>
    </HeaderContainer>
  );
};

export default Header;
