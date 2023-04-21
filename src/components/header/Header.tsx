import { Grid } from '@mui/material';
import React from 'react';
import {
  BackIcon,
  HeaderContainer,
  LogoContainer,
  LogoImage,
} from './Header.styled';
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
      <BackIcon data-testid="back-icon" onClick={handleBack} />
      <LogoContainer>
        <LogoImage data-testid="logo-img" src={logo} />
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
