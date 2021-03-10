import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './state/root-reducer';

import {createAPI} from "./services/api";
import {AuthorizationActionCreator} from './state/authorization/action';
import App from './components/app/app';
import {checkAuth} from "./state/api-actions";
import {AuthorizationStatus} from "./utils";

const api = createAPI(
    () => store.dispatch(AuthorizationActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
