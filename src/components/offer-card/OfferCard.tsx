import React, { ChangeEvent } from 'react';
import { Offer } from '../../models/offer.interface';
import { PlanOfferCard, PlanOfferDiscountChip, PlanOfferInfoSection, PlanOfferInstallments, PlanOfferPrice, PlanOfferPriceSection, PlanOfferRadio, PlanOfferRadioSection, PlanOfferTitle } from './OfferCard.styled';
import { OfferMapper } from './OfferCard.mapper';
import { Radio } from '@mui/material';

interface OfferCardProps {
  offer: Offer;
  checked: boolean;
  onSelect: (checked: Offer) => void;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer, checked, onSelect }) => {
  return <PlanOfferCard>
    <PlanOfferInfoSection>
        <PlanOfferTitle>{OfferMapper.title(offer)}</PlanOfferTitle>
        <PlanOfferPriceSection>
            <PlanOfferPrice>
                {OfferMapper.price(offer)}
            </PlanOfferPrice>
            <PlanOfferDiscountChip size="small" label={OfferMapper.discount(offer)} />
        </PlanOfferPriceSection>
        <PlanOfferInstallments>{OfferMapper.installments(offer)}</PlanOfferInstallments>
    </PlanOfferInfoSection>
    <PlanOfferRadioSection>
        <PlanOfferRadio checked={checked} onChange={() => onSelect(offer)} />
    </PlanOfferRadioSection>
  </PlanOfferCard>;
};

export default OfferCard;
