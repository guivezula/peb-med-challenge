import React from 'react';
import { Offer } from '../../models/offer.interface';
import {
  PlanOfferCard,
  PlanOfferDiscountChip,
  PlanOfferInfoSection,
  PlanOfferInstallments,
  PlanOfferPrice,
  PlanOfferPriceSection,
  PlanOfferRadio,
  PlanOfferRadioSection,
  PlanOfferTitle,
} from './OfferCard.styled';
import { OfferMapper } from './OfferCard.mapper';

export interface OfferCardProps {
  offer: Offer;
  checked: boolean;
  onSelect: (checked: Offer) => void;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer, checked, onSelect }) => {
  return (
    <PlanOfferCard data-testid="offer-card" onClick={() => onSelect(offer)}>
      <PlanOfferInfoSection>
        <PlanOfferTitle>{OfferMapper.title(offer)}</PlanOfferTitle>
        <PlanOfferPriceSection>
          <PlanOfferPrice>{OfferMapper.price(offer)}</PlanOfferPrice>
          <PlanOfferDiscountChip
            data-testid="discount"
            size="small"
            label={OfferMapper.discount(offer)}
          />
        </PlanOfferPriceSection>
        <PlanOfferInstallments>
          {OfferMapper.installments(offer)}
        </PlanOfferInstallments>
      </PlanOfferInfoSection>
      <PlanOfferRadioSection>
        <PlanOfferRadio checked={checked} />
      </PlanOfferRadioSection>
    </PlanOfferCard>
  );
};

export default OfferCard;
