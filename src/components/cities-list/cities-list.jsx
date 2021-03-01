import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {CitiesActionCreator} from '../../state/cities/action';

import {CITIES} from '../../utils.js';

const CitiesList = ({currentCity, setCurrentCity}) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) =>
          <li key={city.id} className="locations__item">
            <a
              className={`${currentCity === city.title ? `tabs__item--active` : ``} locations__item-link tabs__item`}
              href="#"
              onClick={() => {
                setCurrentCity(city.title);
              }}
            >
              <span>{city.title}</span>
            </a>
          </li>)}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  setCurrentCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    currentCity: state.cities.currentCity
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentCity(value) {
    dispatch(CitiesActionCreator.setCurrentCity(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
