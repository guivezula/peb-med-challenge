import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectOffers } from '../../reducers/offer/offer.selectors';
import PaymentForm from '../../components/payment-form/PaymentForm';
import { Payment } from '../../models/payment.interface';
import OfferList from '../../components/offer-list/OfferList';
import { Offer as OfferInterface } from '../../models/offer.interface';
import { useAppDispatch } from '../../app/hooks';
import { fetchOffers } from '../../reducers/offer/offer.actions';
import Header from '../../components/header/Header';
import { postPayment } from '../../reducers/payment/payment.actions';

const Offer: React.FC = () => {
  const dispatch = useAppDispatch();
  const offers = useSelector(selectOffers);
  const [selectedOffer, setSelectedOffer] = useState<OfferInterface>();

  useEffect(() => {
    dispatch(fetchOffers());
  }, []);

  const handlePaymentSubmit = (payment: Partial<Payment>) => {
    dispatch(postPayment(payment));
  };

  const handleOfferSelected = (offer: OfferInterface) => {
    setSelectedOffer(offer);
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
            email="fulano@cicrano.com.br"
            offers={offers}
            onSelect={(offer) => handleOfferSelected(offer)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Offer;
