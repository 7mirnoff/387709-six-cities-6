import React from 'react';
import PropTypes from 'prop-types';

const MainMap = ({mapRef}) => {
  return (
    <section id="map" className="cities__map map" style={{height: `100%`}} ref={mapRef} />
  );
};

MainMap.propTypes = {
  mapRef: PropTypes.object.isRequired
};

export default MainMap;
