import React from 'react';
import { Offer } from '../../models/offer.interface';

interface OfferListProps {
  offers: Offer[];
  onSelect: (offer: Offer) => void;
}

const OfferList: React.FC<OfferListProps> = ({ offers, onSelect }) => {
  return <div>OfferList</div>;
};

export default OfferList;
