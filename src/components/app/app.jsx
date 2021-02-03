import React from 'react';
import PropTypes from 'prop-types';
import CitiesScreen from '../cities-screen/cities-screen';

const App = ({hotels}) => {
  return (
    <CitiesScreen
      hotels={hotels}
    />
  );
};

App.propTypes = {
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

export default App;
