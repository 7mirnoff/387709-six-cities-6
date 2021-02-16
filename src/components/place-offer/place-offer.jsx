import React from 'react';
import PropTypes from 'prop-types';

import Place from "../place/place";
import IconPremium from '../icon-premium/icon-premium';

import {PropsValidator} from '../../utils';

const PlaceOffer = ({
  id,
  title,
  image,
  price,
  type,
  rating,
  isPremium,
  isFavorite,
  onMouseEnter,
}) => {

  const handleMouseEnter = () => {
    onMouseEnter(id);
  };

  return (
    <article
      onMouseEnter={handleMouseEnter}
      className={`cities__card place-card`}>
      {isPremium && <IconPremium />}
      <div className={`cities__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={image} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className={`cities__card-info place-card__info`}>
        <Place
          id={id}
          title={title}
          price={price}
          type={type}
          rating={rating}
          isFavorite={isFavorite}
        />
      </div>
    </article>
  );
};

PlaceOffer.propTypes = {
  ...PropsValidator.CITIES,
  'onMouseEnter': PropTypes.func
};

export default React.memo(PlaceOffer);
