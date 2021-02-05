import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import CitiesScreen from '../cities-screen/cities-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const App = ({hotels}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <CitiesScreen
            hotels={hotels}
          />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/offer/:id">
          <RoomScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
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
