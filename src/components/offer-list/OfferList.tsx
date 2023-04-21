import React, { useState } from 'react';
import { Offer } from '../../models/offer.interface';
import OfferCard from '../offer-card/OfferCard';
import {
  PlanOfferEmailChip,
  PlanOfferListContent,
  PlanOfferListHeader,
  PlanOfferListHelp,
  PlanOfferListHelpIcon,
  PlanOfferListSection,
} from './OfferList.syled';
import { useAppDispatch } from '../../app/hooks';
import { setSelectedOffer } from '../../reducers/offer/offer.actions';

export interface OfferListProps {
  offers: Offer[];
  email: string;
}

const OfferList: React.FC<OfferListProps> = ({ offers, email }) => {
  const [checkedOffer, setCheckedOffer] = useState<Offer>();
  const dispatch = useAppDispatch();

  const handleSelectedOffer = (offer: Offer) => {
    setCheckedOffer(offer);
    dispatch(setSelectedOffer(offer));
  };

  return (
    <PlanOfferListContent>
      <PlanOfferListHeader>{'Confira seu plano:'}</PlanOfferListHeader>
      <PlanOfferEmailChip variant="outlined" label={email} />
      <PlanOfferListSection data-testid="offer-list-section">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            checked={!!checkedOffer && checkedOffer.id === offer.id}
            offer={offer}
            onSelect={(checked) => handleSelectedOffer(checked)}
          />
        ))}
      </PlanOfferListSection>
      <PlanOfferListHelp>
        {'Sobre a cobrança'}
        <PlanOfferListHelpIcon data-testid="help-icon" />
      </PlanOfferListHelp>
    </PlanOfferListContent>
  );
};

export default OfferList;
