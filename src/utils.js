import PropTypes from 'prop-types';

const CITIES = [{
  title: `Paris`,
  url: `paris`,
  id: `1`
},
{
  title: `Cologne`,
  url: `cologne`,
  id: `2`
},
{
  title: `Brussels`,
  url: `brussels`,
  id: `3`
},
{
  title: `Amsterdam`,
  url: `amsterdam`,
  id: `4`
},
{
  title: `Hamburg`,
  url: `hamburg`,
  id: `5`
},
{
  title: `Dusseldorf`,
  url: `dusseldorf`,
  id: `6`
}];

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

export {CITIES, PropsValidator};
