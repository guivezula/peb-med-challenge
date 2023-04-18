import React from 'react';
import { Offer } from '../../models/offer.interface';

interface OfferCardProps {
  offer: Offer;
  onSelect: () => void;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer, onSelect }) => {
  return <div>OfferCard</div>;
};

export default OfferCard;
