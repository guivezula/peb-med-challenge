import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectOffers } from '../../reducers/offer/offer.selectors';
import PaymentForm from '../../components/payment-form/PaymentForm';
import { Payment } from '../../models/payment.interface';
import OfferList from '../../components/offer-list/OfferList';
import { Offer as OfferInterface } from '../../models/offer.interface';
import { useAppDispatch } from '../../app/hooks';
import { fetchOffers } from '../../reducers/offer/offer.actions';

const Offer: React.FC = () => {
  const dispatch = useAppDispatch();
  const offers = useSelector(selectOffers);

  useEffect(() => {
    dispatch(fetchOffers());
  }, []);

  const handlePaymentSubmit = (payment: Partial<Payment>) => {};

  const handleOfferSelected = (offer: OfferInterface) => {
    console.log(offer);
  };

  return (
    <>
      <Grid container>
        <Grid item lg={12} md={12} sm={12}></Grid>
      </Grid>
      <Grid
        container
        flexDirection={{
          sm: 'column-reverse',
          md: 'row',
          lg: 'row',
          xs: 'column-reverse',
        }}
      >
        <Grid item lg={6} md={6} sm={12}>
          <PaymentForm onSubmit={(payment) => handlePaymentSubmit(payment)} />
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
          <OfferList
            email='fulano@cicrano.com.br'
            offers={offers}
            onSelect={(offer) => handleOfferSelected(offer)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Offer;
