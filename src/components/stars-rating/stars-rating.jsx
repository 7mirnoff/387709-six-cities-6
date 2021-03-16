import React from 'react';
import PropTypes from 'prop-types';

const StarsRating = ({rating}) => {
  const style = {
    width: `${Math.min(Math.round(rating) * 100 / 5, 100)}%`
  };
  return (
    <>
      <span style={style} />
    </>
  );
};

StarsRating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default StarsRating;
