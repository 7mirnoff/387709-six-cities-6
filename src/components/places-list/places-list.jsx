import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

const PlacesList = ({hotels}) => {
  return (
    <>
      <div className="cities__places-list places__list tabs__content">
        {hotels.map((hotel) =>
          <PlaceCard
            key={hotel.id}
            title={hotel.title}
            image={hotel.preview_image}
            price={hotel.price}
            rating={hotel.rating}
            type={hotel.type}
            isFavorite={hotel.is_favorite}
            isPremium={hotel.is_premium}
          />)}
      </div>
    </>
  );
};

PlacesList.propTypes = {
  hotels: PropTypes.arrayOf(
      PropTypes.shape({
        'id': PropTypes.number.isRequired,
        'is_favorite': PropTypes.bool.isRequired,
        'is_premium': PropTypes.bool.isRequired,
        'preview_image': PropTypes.string.isRequired,
        'price': PropTypes.number.isRequired,
        'rating': PropTypes.number.isRequired,
        'title': PropTypes.string.isRequired,
        'type': PropTypes.string.isRequired
      })
  )
};

export default PlacesList;
