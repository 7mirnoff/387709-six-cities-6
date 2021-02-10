import React, {useState} from 'react';
import PlaceCard from '../place-card/place-card';
import {PropsValidator} from '../../utils';

const PlacesList = ({hotels}) => {
  const [idActive, setIdActive] = useState(hotels[0].id);

  const handleMouseEnter = (id) => {
    setIdActive(id);
  };

  return (
    <>
      <div className="cities__places-list places__list tabs__content">
        {hotels.map((hotel) =>
          <PlaceCard
            key={hotel.id}
            id={hotel.id}
            title={hotel.title}
            image={hotel.preview_image}
            price={hotel.price}
            rating={hotel.rating}
            type={hotel.type}
            isFavorite={hotel.is_favorite}
            isPremium={hotel.is_premium}
            isActive={idActive === hotel.id}
            handleMouseEnter={handleMouseEnter}
            pages='offers'
          />)}
      </div>
    </>
  );
};

PlacesList.propTypes = {
  hotels: PropsValidator.HOTELS
};

export default PlacesList;
