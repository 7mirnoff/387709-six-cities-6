import React from 'react';
import {connect} from 'react-redux';
import PlaceFavorites from '../place-favorites/place-favorites';
import {PropsValidator} from '../../utils';

const FavoritesItem = ({hotels}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {hotels.map((hotel) =>
          <PlaceFavorites
            key={hotel.id}
            id={hotel.id}
            title={hotel.title}
            image={hotel.preview_image}
            price={hotel.price}
            rating={hotel.rating}
            type={hotel.type}
            isFavorite={hotel.is_favorite}
            isPremium={hotel.is_premium}
          />)}
      </div>
    </li>
  );
};

FavoritesItem.propTypes = {
  hotels: PropsValidator.HOTELS
};

const mapStateToProps = (state) => {
  return {
    hotels: state.cities.offers
  };
};

export default connect(mapStateToProps, null)(FavoritesItem);
