import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PlaceOffer from '../place-offer/place-offer';
import {PropsValidator} from '../../utils';

const PlacesList = ({hotels, currentCity}) => {
  const [idActive, setIdActive] = useState(hotels[0].id);

  const handleMouseEnter = (id) => {
    setIdActive(id);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{hotels.length} places to stay in {currentCity}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {hotels.map((hotel) =>
          <PlaceOffer
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
            onMouseEnter={handleMouseEnter}
          />)}
      </div>
    </section>
  );
};

PlacesList.propTypes = {
  hotels: PropsValidator.HOTELS,
  currentCity: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    hotels: state.cities.offers,
    currentCity: state.cities.currentCity
  };
};

export default connect(mapStateToProps, null)(PlacesList);
