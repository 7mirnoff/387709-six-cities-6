import React from 'react';
import PropTypes from 'prop-types';

const NearbyMap = ({mapRef}) => {
  return (
    <section id="map" className="property__map map" ref={mapRef} />
  );
};

NearbyMap.propTypes = {
  mapRef: PropTypes.object.isRequired
};

export default NearbyMap;
