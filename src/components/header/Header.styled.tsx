import styled from '@emotion/styled';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const LogoContainer = styled.div({
  position: 'absolute',
  width: '100%',
  top: 0,
  display: 'flex',
  justifyContent: 'center',
});

export const LogoImage = styled.img(() => ({
  marginTop: 31,
}));

export const IconContainer = styled.div(() => ({
  position: 'fixed',
}));

export const BackIcon = styled(ArrowBackIosIcon)(() => ({
  color: '#151516',
  fontSize: '1rem',
  marginTop: 11,
  marginLeft: 48,
  '@media (max-width: 768px)': {
    marginLeft: 11,
  },
  position: 'fixed',
  zIndex: 1000,
  padding: 20,
}));

export const HeaderContainer = styled.header(() => ({
  marginBottom: 34,
  height: 60,
}));
