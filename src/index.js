import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const data = [
  {
    "id": 1,
    "is_favorite": true,
    "is_premium": true,
    "preview_image": `img/apartment-01.jpg`,
    "price": 120,
    "rating": 1,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
  {
    "id": 2,
    "is_favorite": true,
    "is_premium": false,
    "preview_image": `img/apartment-02.jpg`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
  {
    "id": 3,
    "is_favorite": false,
    "is_premium": false,
    "preview_image": `img/apartment-03.jpg`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
  {
    "id": 4,
    "is_favorite": false,
    "is_premium": true,
    "preview_image": `img/apartment-01.jpg`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
  {
    "id": 5,
    "is_favorite": false,
    "is_premium": false,
    "preview_image": `img/room.jpg`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
];

ReactDOM.render(
    <App
      hotels={data}
    />,
    document.querySelector(`#root`)
);
