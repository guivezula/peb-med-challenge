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

export interface OfferListProps {
  offers: Offer[];
  email: string;
  onSelect: (offer: Offer) => void;
}

const OfferList: React.FC<OfferListProps> = ({ offers, email, onSelect }) => {
  const [checkedOffer, setCheckedOffer] = useState<Offer>();

  const handleSelectedOffer = (offer: Offer) => {
    setCheckedOffer(offer);
    onSelect(offer);
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
