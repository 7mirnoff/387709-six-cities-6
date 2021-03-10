import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import browserHistory from "../../browser-history";
import CitiesScreen from '../pages/cities-screen/cities-screen';
import LoginScreen from '../pages/login-screen/login-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import RoomScreen from '../pages/room-screen/room-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchHotelsList} from "../../state/api-actions";
import {PropsValidator} from '../../utils';

const Routes = {
  INDEX: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`
};

const App = ({isDataLoaded, onLoadData}) => {

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={Routes.INDEX}>
          <CitiesScreen />
        </Route>
        <Route exact path={Routes.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={Routes.FAVORITES}>
          <FavoritesScreen />
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

const mapStateToProps = (state) => ({
  isDataLoaded: state.cities.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchHotelsList());
  },
});

App.propTypes = {
  hotels: PropsValidator.HOTELS,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
