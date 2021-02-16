import React from 'react';

import Place from "../place/place";
import IconPremium from '../icon-premium/icon-premium';

import {PropsValidator} from '../../utils';

const PlaceFavorites = ({
  id,
  title,
  image,
  price,
  type,
  rating,
  isPremium,
  isFavorite,
}) => {
  return (
    <article className={`favorites__card place-card`}>
      {isPremium && <IconPremium />}
      <div className={`favorites__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={image} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className={`favorites__card-info place-card__info`}>
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

PlaceFavorites.propTypes = {
  ...PropsValidator.CITIES
};

export default PlaceFavorites;
