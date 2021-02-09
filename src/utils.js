import PropTypes from 'prop-types';

const PropsValidator = {
  HOTELS: PropTypes.arrayOf(
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

export {PropsValidator};
