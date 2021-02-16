import React from 'react';
import {Link} from 'react-router-dom';
import {PropsValidator} from '../../utils';

const PlaceCard = ({
  id,
  title,
  price,
  type,
  rating,
  isFavorite
}) => {

  const StarsRating = () => {
    const style = {
      width: `${Math.min(Math.round(rating) * 100 / 5, 100)}%`
    };
    return <span style={style} />;
  };

  return (
    <>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{price} </b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button className={`${isFavorite ? `place-card__bookmark-button--active` : ``} place-card__bookmark-button button`} type="button">
          <svg className="place-card__bookmark-icon" width={18} height={19}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <StarsRating />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${id}`}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </>
  );
};

PlaceCard.propTypes = {
  ...PropsValidator.CITIES
};

export default PlaceCard;
