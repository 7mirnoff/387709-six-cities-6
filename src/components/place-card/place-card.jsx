import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {PropsValidator} from '../../utils';

const IconPremium = () => {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
};

const ClassesMap = {
  offers: `cities__`,
  favorites: `favorites__`,
  other: `near-places__`
};

const PlaceCard = ({
  id,
  title,
  image,
  price,
  type,
  rating,
  isPremium,
  isFavorite,
  handleMouseEnter,
  pages,
}) => {

  const StarsRating = () => {
    const style = {
      width: `${Math.min(Math.round(rating) * 100 / 5, 100)}%`
    };
    return <span style={style} />;
  };

  return (
    <article
      onMouseEnter={() => {
        handleMouseEnter(id);
      }}
      className={`${ClassesMap[pages]}card place-card`}>
      {isPremium && <IconPremium />}
      <div className={`${ClassesMap[pages]}image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={image} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className={`${ClassesMap[pages]}card-info place-card__info`}>
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
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  ...PropsValidator.CITIES,
  'handleMouseEnter': PropTypes.func,
  'isActive': PropTypes.bool,
  'page': PropTypes.string.isRequired
};

export default React.memo(PlaceCard);
