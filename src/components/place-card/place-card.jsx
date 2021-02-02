import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = (props) => {
  const {title, image, price, type, rating, isPremium, isFavorite} = props;

  const IconPremium = () => {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  };

  const StarsRating = () => {
    const style = {
      width: `${rating * 100 / 5}%`
    };
    return <span style={style} />;
  };

  return (
    <article className="cities__place-card place-card">
      {isPremium && <IconPremium />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
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
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  'isFavorite': PropTypes.bool.isRequired,
  'isPremium': PropTypes.bool.isRequired,
  'image': PropTypes.string.isRequired,
  'price': PropTypes.number.isRequired,
  'rating': PropTypes.number.isRequired,
  'title': PropTypes.string.isRequired,
  'type': PropTypes.string.isRequired
};

export default PlaceCard;
