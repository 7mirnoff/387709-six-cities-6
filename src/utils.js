import PropTypes from 'prop-types';

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const FavoriteStatus = {
  ON: 0.1,
  OFF: 0,
};

export const CITIES = [{
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

export const PropsValidator = {
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

export const AppRoute = {
  INDEX: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`
};

export const APIRoute = {
  HOTELS: `/hotels`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  FAVORITES: `/favorites`,
  COMMENTS: `/comments`,
};

export const APIRouteMethods = {
  getHotel: (id) => `${APIRoute.HOTELS}/${id}`,
  getHotelNearby: (id) => `${APIRoute.HOTELS}/${id}/nearby`,
  getHotelComments: (id) => `${APIRoute.COMMENTS}/${id}`,
  setHotelComments: (id) => `${APIRoute.COMMENTS}/${id}`,
  setFavoritesStatus: (id, isFavorite = FavoriteStatus.ON) => `${APIRoute.FAVORITES}/${id}/${isFavorite}`
};

