import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {offers} from './mocs/offers';

ReactDOM.render(
    <App
      hotels={offers}
    />,
    document.querySelector(`#root`)
);
