import React from 'react';
import CitiesScreen from '../cities-screen/cities-screen';

const App = (props) => {
  const { hotels } = props;

  return (
    <CitiesScreen
      hotels={hotels}
    />
  );
};

export default App;
