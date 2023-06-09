import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectSelectedOffer } from '../../reducers/offer/offer.selectors';
import { selectPayment } from '../../reducers/payment/payment.selectors';
import { useAppDispatch } from '../../app/hooks';
import { resetPayment } from '../../reducers/payment/payment.actions';
import { setSelectedOffer } from '../../reducers/offer/offer.actions';
import Header from '../../components/header/Header';
import {
  ShapeCircle,
  ShapeImage,
  SuccessContent,
  SuccessHomeButton,
  SuccessInfo,
  SuccessManagementLink,
  SuccessOfferCard,
  SuccessOfferCardText,
  SuccessTitle,
  SuccessUserCard,
  SuccessUserCardItem,
  SuccessUserCardText,
} from './Success.styled';
import successImage from '../../img/success.png';
import shapeImage from '../../img/shape.png';
import { OfferMapper } from '../../mapper/offer.mapper';
import { USER_MOCK } from '../../constants/mocks';

const Success: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const selectedOffer = useSelector(selectSelectedOffer);
  const payment = useSelector(selectPayment);

  const loggedUser = USER_MOCK;

  const resetStatesHandler = () => {
    Promise.all([
      dispatch(resetPayment),
      dispatch(setSelectedOffer(null)),
    ]).then(() => navigate('/'));
  };

  return (
    <>
      <Header onBack={() => resetStatesHandler()} />
      <SuccessContent>
        <img src={successImage} />
        <SuccessTitle>{'Parabéns!'}</SuccessTitle>
        <SuccessInfo>{'Sua assinatura foi realizada com sucesso.'}</SuccessInfo>
        <SuccessUserCard>
          <SuccessOfferCard>
            <ShapeCircle>
              <ShapeImage src={shapeImage} />
            </ShapeCircle>
            <div>
              <SuccessOfferCardText data-testid="success-offer-title">
                {selectedOffer && OfferMapper.title(selectedOffer)}
              </SuccessOfferCardText>
              <SuccessOfferCardText data-testid="success-offer-price">
                {selectedOffer &&
                  OfferMapper.priceWithInstallments(selectedOffer)}
              </SuccessOfferCardText>
            </div>
          </SuccessOfferCard>
          <SuccessUserCardItem>
            <SuccessUserCardText label>{'E-mail'}</SuccessUserCardText>
            <SuccessUserCardText data-testid="success-user-email">
              {loggedUser.email}
            </SuccessUserCardText>
          </SuccessUserCardItem>
          <SuccessUserCardItem>
            <SuccessUserCardText label>{'CPF'}</SuccessUserCardText>
            <SuccessUserCardText data-testid="success-payment-cpf">
              {payment?.creditCardCPF}
            </SuccessUserCardText>
          </SuccessUserCardItem>
        </SuccessUserCard>
        <SuccessManagementLink>{'Gerenciar assinatura'}</SuccessManagementLink>
        <SuccessHomeButton
          data-testid="success-button"
          onClick={() => resetStatesHandler()}
        >
          {'IR PARA A HOME'}
        </SuccessHomeButton>
      </SuccessContent>
    </>
  );
};

export default Success;
