import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import CitiesScreen from '../pages/cities-screen/cities-screen';
import LoginScreen from '../pages/login-screen/login-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import RoomScreen from '../pages/room-screen/room-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import {PropsValidator} from '../../utils';

const Routes = {
  INDEX: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`
};

const App = ({hotels}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.INDEX}>
          <CitiesScreen
            hotels={hotels}
          />
        </Route>
        <Route exact path={Routes.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={Routes.FAVORITES}>
          <FavoritesScreen
            hotels={hotels}
          />
        </Route>
        <Route exact path={Routes.OFFER}>
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
  hotels: PropsValidator.HOTELS
};

export default App;
