import React, { useState } from 'react';
import { Offer } from '../../models/offer.interface';
import OfferCard from '../offer-card/OfferCard';

interface OfferListProps {
  offers: Offer[];
  onSelect: (offer: Offer) => void;
}

const OfferList: React.FC<OfferListProps> = ({ offers, onSelect }) => {
    const [checkedOffer, setCheckedOffer] = useState<Offer>();

    const handleSelectedOffer = (offer: Offer) => {
        setCheckedOffer(offer);
        onSelect(offer);
    }
  return (
    <>
        {offers.map((offer) => (
            <OfferCard key={offer.id} checked={!!checkedOffer && checkedOffer.id === offer.id} offer={offer} onSelect={(checked) => handleSelectedOffer(checked)} />
        ))}
    </>
  );
};

export default OfferList;
