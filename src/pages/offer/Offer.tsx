import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectOffers, selectSelectedOffer } from '../../reducers/offer/offer.selectors';
import PaymentForm from '../../components/payment-form/PaymentForm';
import { Payment } from '../../models/payment.interface';
import OfferList from '../../components/offer-list/OfferList';
import { useAppDispatch } from '../../app/hooks';
import { fetchOffers } from '../../reducers/offer/offer.actions';
import Header from '../../components/header/Header';
import { postPayment } from '../../reducers/payment/payment.actions';
import { useNavigate } from 'react-router-dom';
import { USER_MOCK } from '../../constants/mocks';

const Offer: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const offers = useSelector(selectOffers);
  const selectedOffer = useSelector(selectSelectedOffer);

  const loggedUser = USER_MOCK;

  useEffect(() => {
    dispatch(fetchOffers());
  }, []);

  const handlePaymentSubmit = (payment: Partial<Payment>) => {
    dispatch(postPayment(payment))
    .then((payment) => !!payment && selectedOffer && navigate("/success"));
  };

  return (
    <>
      <Header />
      <Grid
        container
        flexDirection={{
          sm: 'column-reverse',
          md: 'row',
          lg: 'row',
          xs: 'column-reverse',
        }}
      >
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          display={'flex'}
          justifyContent={'center'}
        >
          <PaymentForm
            offer={selectedOffer}
            onSubmit={(payment) => handlePaymentSubmit(payment)}
          />
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          display={'flex'}
          justifyContent={'center'}
        >
          <OfferList
            email={loggedUser.email}
            offers={offers}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Offer;
